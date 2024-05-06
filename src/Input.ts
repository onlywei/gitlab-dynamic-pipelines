export type GitlabPipelineInput = {
	default?: string;
	description?: string;
	options?: string[];
	regex?: string;
	type?: 'array' | 'string' | 'number' | 'boolean';
};
