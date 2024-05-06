import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { toYAML, type Pipeline } from '../dist/index';

test('basic pipeline', () => {
	const basicPipeline: Pipeline = {
		globalKeywords: {
			workflow: {
				name: 'Basic Pipeline',
			},
			stages: ['test', 'build'],
			default: {
				image: 'node:20.12.2',
			},
		},
		jobs: {
			job1: {
				stage: 'test',
				script: ['echo "it works!"'],
			},
			job2: {
				stage: 'build',
				script: ['echo "it has been built!"'],
			},
		},
	};

	assert.equal(
		toYAML(basicPipeline),
		fs.readFileSync('./test/basicPipeline.yaml', 'utf-8'),
	);
});
