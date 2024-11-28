import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../dist/index';

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
