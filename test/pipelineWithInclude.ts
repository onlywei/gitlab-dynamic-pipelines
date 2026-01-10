import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../src/index.ts';

test('pipeline with include', () => {
  const pipelineWithInclude: Pipeline = {
    globalKeywords: {
      include: [
        {
          project: 'somewhere',
          ref: 'main',
          file: '/ci_library/file.yml',
        },
        {
          project: 'somewhere',
          ref: 'main',
          file: '/ci_library/file.yml',
          rules: [
            {
              if: 'foo == foo',
            },
            {
              if: 'bar == bar',
              changes: ['foo/*', 'bar/*'],
            },
          ],
        },
      ],
      stages: ['test', 'build'],
      workflow: {
        name: 'Pipeline w/ Include',
      },
    },
    jobs: {
      job1: {
        script: ['echo "it works!"'],
        stage: 'test',
      },
    },
  };

  equal(toYAML(pipelineWithInclude), readFileSync('./test/pipelineWithInclude.yaml', 'utf8'));
});
