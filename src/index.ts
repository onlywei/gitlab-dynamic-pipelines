import { stringify } from 'yaml';
import type { Job } from './Job';
import type { GlobalKeywords, YAMLHeader } from './Pipeline';

export type GitlabCIDotYAML = {
	header?: YAMLHeader;
	globalKeywords: GlobalKeywords;
	jobs: Record<string, Job>;
};

export function toYAML(pipeline: GitlabCIDotYAML) {
	let result = '';

	if (pipeline.header) {
		result += stringify(pipeline.header);
		result += '---\n\n';
	}

	result += stringify(pipeline.globalKeywords);
	result += stringify(pipeline.jobs);

	return result;
}
