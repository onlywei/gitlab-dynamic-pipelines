import type { GitlabJob, GitlabJobDefaults } from './Job.js';
import type { Include } from './Include.js';
import type { Input } from './Input.js';
import type { Workflow } from './Workflow.js';
import type { Variables } from './Variables.js';

export type GitlabPipelineHeader = {
	spec?: { inputs?: Input[] }
}

type GlobalKeywords = {
	default?: GitlabJobDefaults;
	include?: string | Include[];
	pages?: GitlabJob & { publish?: string; path_prefix?: string; };
	stages?: string[];
	variables?: Variables;
	workflow?: Workflow;
}

export type GitlabPipeline = Omit<Record<string, GitlabJob>, keyof GlobalKeywords> & GlobalKeywords;
