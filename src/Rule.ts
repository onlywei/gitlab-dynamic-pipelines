import type { GitlabJobNeed } from './Need';
import type { GitlabPipelineVariables } from './Variables';

export type GitlabPipelineRule = {
	allow_failure?: boolean;
	changes?:
		| string[]
		| {
				paths?: string[];
				compare_to?: string;
		  };
	exists?:
		| string[]
		| {
				paths: string[];
				project?: string;
				ref?: string;
		  };
	if?: string;
	interruptible?: boolean;
	needs?: GitlabJobNeed[];
	variables?: GitlabPipelineVariables;
	when?:
		| 'on_success'
		| 'on_failure'
		| 'never'
		| 'always'
		| 'manual'
		| 'delayed';
};
