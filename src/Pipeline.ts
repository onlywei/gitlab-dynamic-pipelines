import type { GitlabPipelineInclude } from './Include';
import type { GitlabPipelineInput } from './Input';
import type { GitlabJob, GitlabJobDefaults } from './Job';
import type { GitlabPipelineVariables } from './Variables';
import type { GitlabPipelineWorkflow } from './Workflow';

export type GitlabPipelineHeader = {
	spec?: { inputs?: GitlabPipelineInput[] };
};

type GitlabPipelineGlobalKeywords = {
	default?: GitlabJobDefaults;
	include?: string | GitlabPipelineInclude[];
	pages?: GitlabJob & { publish?: string; path_prefix?: string };
	stages?: string[];
	variables?: GitlabPipelineVariables;
	workflow?: GitlabPipelineWorkflow;
};

export type GitlabPipeline = Omit<
	Record<string, GitlabJob>,
	keyof GitlabPipelineGlobalKeywords
> &
	GitlabPipelineGlobalKeywords;
