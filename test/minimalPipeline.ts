import { equal } from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { type Pipeline, toYAML } from '../dist/index';

test('minimal pipeline', () => {
	const minimalPipeline: Pipeline = {
		globalKeywords: {
			workflow: {
				name: 'Minimal Pipeline',
			},
		},
		jobs: {},
	};

	equal(
		toYAML(minimalPipeline),
		readFileSync('./test/minimalPipeline.yaml', 'utf-8'),
	);
});
