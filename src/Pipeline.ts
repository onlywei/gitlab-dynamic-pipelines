import type { Include } from './Include';
import type { Input } from './Input';
import type { Job, JobDefaults } from './Job';
import type { GitlabCICDVariables } from './Variables';
import type { PipelineWorkflow } from './Workflow';

export type YAMLHeader = {
	spec?: { inputs?: Input[] };
};

export type GlobalKeywords = {
	default?: JobDefaults;
	include?: string | Include[];
	pages?: Job & { publish?: string; path_prefix?: string };
	stages?: string[];
	variables?: GitlabCICDVariables;
	workflow?: PipelineWorkflow;
};

export type Pipeline = {
	[jobName: string]: Job;
};
