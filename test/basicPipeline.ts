import type { GitlabCIDotYAML } from '../index';

export const basicPipeline: GitlabCIDotYAML = {
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
			script: ['echo "it works!'],
		},
		job2: {
			stage: 'build',
			script: ['echo "it has been built!'],
		},
	},
};
