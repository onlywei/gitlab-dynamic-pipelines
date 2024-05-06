import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { toYAML, type Pipeline } from '../dist/index';

test('pipeline with include', () => {
	const pipelineWithInclude: Pipeline = {
		globalKeywords: {
			workflow: {
				name: 'Pipeline w/ Include',
			},
			stages: ['test', 'build'],
			include: [
				{
					project: 'somewhere',
					ref: 'main',
					file: '/ci_library/file.yml',
				},
			],
		},
		jobs: {
			job1: {
				stage: 'test',
				script: ['echo "it works!"'],
			},
		},
	};

	equal(
		toYAML(pipelineWithInclude),
		readFileSync('./test/pipelineWithInclude.yaml', 'utf-8'),
	);
});
