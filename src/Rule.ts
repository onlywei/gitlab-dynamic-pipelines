import type { JobNeed } from './Need';
import type { GitlabCICDVariables } from './Variables';

export type Rule = {
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
	needs?: JobNeed[];
	variables?: GitlabCICDVariables;
	when?:
		| 'on_success'
		| 'on_failure'
		| 'never'
		| 'always'
		| 'manual'
		| 'delayed';
};
