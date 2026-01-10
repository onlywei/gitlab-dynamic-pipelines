import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../src/index.ts';

test('basic pipeline', () => {
  const basicPipeline: Pipeline = {
    globalKeywords: {
      default: {
        image: 'node:20.12.2',
      },
      stages: ['test', 'build'],
      workflow: {
        name: 'Basic Pipeline',
      },
    },
    jobs: {
      job1: {
        script: ['echo "it works!"'],
        stage: 'test',
      },
      job2: {
        script: ['echo "it has been built!"'],
        stage: 'build',
      },
    },
  };

  equal(toYAML(basicPipeline), readFileSync('./test/basicPipeline.yaml', 'utf8'));
});
