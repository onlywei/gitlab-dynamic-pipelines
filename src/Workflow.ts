import type { Rule } from './Rule.d.ts';

type AutoCancel = {
	on_new_commit?: 'conservative' | 'interruptible' | 'none';
	on_job_failure?: 'all' | 'none';
}

type WorkflowRule = Pick<Rule, 'if' | 'changes' | 'exists' | 'variables'> & {
	when?: 'always' | 'never';
	auto_cancel?: AutoCancel;
}

export type Workflow = {
	auto_cancel?: AutoCancel;
	name?: string;
	rules?: WorkflowRule[];
}
