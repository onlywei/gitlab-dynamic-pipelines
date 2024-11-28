import { stringify } from 'yaml';
import type { PipelineRef } from './Include';
import type { ComponentInputSpec } from './Input';
import type { Job, JobDefaults } from './Job';
import type { GitlabCICDVariables } from './Variables';
import type { Workflow } from './Workflow';
import { referenceTag } from './referenceTag';

export type { Job } from './Job';
export type { PipelineRef } from './Include';
export type { JobNeed } from './Need';
export { ReferenceTag } from './referenceTag';

export type YAMLHeader = {
	spec?: { inputs?: Record<string, ComponentInputSpec> };
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
	const stringifyOptions = { customTags: [referenceTag] };
	let result = '';

	if (pipeline.header) {
		result += stringify(pipeline.header, stringifyOptions);
		result += '---\n\n';
	}

	if (Object.keys(pipeline.globalKeywords).length) {
		result += stringify(pipeline.globalKeywords, stringifyOptions);
	}

	if (Object.keys(pipeline.jobs).length) {
		result += stringify(pipeline.jobs, stringifyOptions);
	}

	return result;
}
