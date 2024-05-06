import type { Need } from './Need.js';
import type { Variables } from './Variables.js';

type ChangesRule = string[] | {
	paths?: string[];
	compare_to?: string;
}

type ExistsRule = string[] | {
	paths: string[];
	project?: string;
	ref?: string;
}

export type Rule = {
	allow_failure?: boolean;
	changes?: ChangesRule;
	exists?: ExistsRule;
	if?: string;
	interruptible?: boolean;
	needs?: Need[];
	variables?: Variables;
	when?: 'on_success' | 'on_failure' | 'never' | 'always' | 'manual' | 'delayed';
}
