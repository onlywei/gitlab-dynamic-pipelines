import type { GitlabPipelineRule } from './Rule';

type GitlabPipelineAutoCancelConfig = {
	on_new_commit?: 'conservative' | 'interruptible' | 'none';
	on_job_failure?: 'all' | 'none';
};

type GitlabPipelineWorkflowRule = Pick<
	GitlabPipelineRule,
	'if' | 'changes' | 'exists' | 'variables'
> & {
	when?: 'always' | 'never';
	auto_cancel?: GitlabPipelineAutoCancelConfig;
};

export type GitlabPipelineWorkflow = {
	auto_cancel?: GitlabPipelineAutoCancelConfig;
	name?: string;
	rules?: GitlabPipelineWorkflowRule[];
};
