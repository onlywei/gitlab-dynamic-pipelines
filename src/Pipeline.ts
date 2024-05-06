import type { GitlabJob, GitlabJobDefaults } from './Job';
import type { GitlabPipelineInclude } from './Include';
import type { GitlabPipelineInput } from './Input';
import type { GitlabPipelineWorkflow } from './Workflow';
import type { GitlabPipelineVariables } from './Variables';

export type GitlabPipelineHeader = {
	spec?: { inputs?: GitlabPipelineInput[] }
}

type GitlabPipelineGlobalKeywords = {
	default?: GitlabJobDefaults;
	include?: string | GitlabPipelineInclude[];
	pages?: GitlabJob & { publish?: string; path_prefix?: string; };
	stages?: string[];
	variables?: GitlabPipelineVariables;
	workflow?: GitlabPipelineWorkflow;
}

export type GitlabPipeline = Omit<Record<string, GitlabJob>, keyof GitlabPipelineGlobalKeywords> & GitlabPipelineGlobalKeywords;
