import type { GlobalKeywords, Pipeline } from '../index';

function printJSONPipeline(globalKeywords: GlobalKeywords, jobs: Pipeline) {
	console.log(JSON.stringify({ ...globalKeywords, ...jobs }));
}

printJSONPipeline(
	{
		workflow: {
			name: 'Basic Pipeline',
		},
		stages: ['test', 'build'],
		default: {
			image: 'node:20.12.2',
		},
	},
	{
		job1: {
			stage: 'test',
			script: ['echo "it works!'],
		},
		job2: {
			stage: 'build',
			script: ['echo "it has been built!'],
		},
	},
);
