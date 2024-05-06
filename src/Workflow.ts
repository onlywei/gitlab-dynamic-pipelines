import type { Rule } from './Rule';

type AutoCancelConfig = {
	on_new_commit?: 'conservative' | 'interruptible' | 'none';
	on_job_failure?: 'all' | 'none';
};

type PipelineWorkflowRule = Pick<
	Rule,
	'if' | 'changes' | 'exists' | 'variables'
> & {
	when?: 'always' | 'never';
	auto_cancel?: AutoCancelConfig;
};

export type PipelineWorkflow = {
	auto_cancel?: AutoCancelConfig;
	name?: string;
	rules?: PipelineWorkflowRule[];
};
