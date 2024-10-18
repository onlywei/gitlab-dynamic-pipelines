import { stringify } from 'yaml';
import type { PipelineRef } from './Include';
import type { Input } from './Input';
import type { Job, JobDefaults } from './Job';
import type { GitlabCICDVariables } from './Variables';
import type { Workflow } from './Workflow';

export { type Job } from './Job';
export { type PipelineRef } from './Include';

export type YAMLHeader = {
	spec?: { inputs?: Record<string, Input> };
};

export type GlobalKeywords = {
	default?: JobDefaults;
	include?: string | PipelineRef[];
	pages?: Job & { publish?: string; path_prefix?: string };
	stages?: string[];
	variables?: GitlabCICDVariables;
	workflow?: Workflow;
};

export type Pipeline = {
	header?: YAMLHeader;
	globalKeywords: GlobalKeywords;
	jobs: Record<string, Job>;
};

export function toYAML(pipeline: Pipeline) {
	let result = '';

	if (pipeline.header) {
		result += stringify(pipeline.header);
		result += '---\n\n';
	}

	result += stringify(pipeline.globalKeywords);
	result += stringify(pipeline.jobs);

	return result;
}
