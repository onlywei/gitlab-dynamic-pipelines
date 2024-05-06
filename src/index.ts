import type { Job } from './Job';
import type { GlobalKeywords, YAMLHeader } from './Pipeline';

export type GitlabCIDotYAML = {
	header?: YAMLHeader;
	globalKeywords: GlobalKeywords;
	jobs: Record<string, Job>;
};
