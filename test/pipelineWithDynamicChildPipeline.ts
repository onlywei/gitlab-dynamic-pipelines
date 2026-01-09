import { equal } from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../dist/index.js';

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
        stage: 'setup',
        script: [
          'echo Script to generate a child pipeline here',
        ],
        artifacts: {
          paths: [
            '$CI_PROJECT_DIR/pipeline.yml',
          ],
        },
      },
      trigger_pipeline: {
        needs: [
          {
            job: 'setup',
            artifacts: true,
          },
        ],
        inherit: {
          variables: true,
        },
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

  equal(toYAML(pipelineWithDynamicChildPipeline), readFileSync('./test/pipelineWithDynamicChildPipeline.yaml', 'utf-8'));
});
