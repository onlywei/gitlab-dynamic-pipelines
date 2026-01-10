import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../src/index.ts';

test('dynamic child pipeline', () => {
  const pipelineWithDynamicChildPipeline: Pipeline = {
    globalKeywords: {
      stages: ['setup', 'trigger_pipeline'],
      workflow: {
        name: 'Pipeline w/ Dynamic Child Pipeline',
      },
    },
    jobs: {
      setup: {
        artifacts: {
          paths: ['$CI_PROJECT_DIR/pipeline.yml'],
        },
        script: ['echo Script to generate a child pipeline here'],
        stage: 'setup',
      },
      trigger_pipeline: {
        inherit: {
          variables: true,
        },
        needs: [
          {
            job: 'setup',
            artifacts: true,
          },
        ],
        trigger: {
          include: [
            {
              artifact: `$CI_PROJECT_DIR/pipeline.yml`,
              job: 'setup',
            },
          ],
          strategy: 'depend',
          forward: {
            pipeline_variables: true,
          },
        },
        variables: {
          PARENT_PIPELINE_ID: '$CI_PIPELINE_ID',
        },
      },
    },
  };

  equal(
    toYAML(pipelineWithDynamicChildPipeline),
    readFileSync('./test/pipelineWithDynamicChildPipeline.yaml', 'utf8'),
  );
});
