import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { ReferenceTag, toYAML, type Pipeline } from '../dist/index';

test('reference tag', () => {
	const pipelineWithInclude: Pipeline = {
		globalKeywords: {
			workflow: {
				name: 'Pipeline w/ Reference Tag',
			},
			include: [
				{
					component: 'some/awesome-component/',
					inputs: { MY_INPUT: '$MY_INPUT' },
				},
			],
		},
		jobs: {
			job1: {
				before_script: [
					new ReferenceTag(['.awesome-component', 'before_script']),
				],
				script: ['echo "it works!"'],
			},
		},
	};

	equal(
		toYAML(pipelineWithInclude),
		readFileSync('./test/pipelineWithReferenceTag.yaml', 'utf-8'),
	);
});
