import type { GitlabPipelineInput } from './Input';
import type { GitlabPipelineRule } from './Rule';

type LocalInclude = {
	component?: never;
	file?: never;
	inputs?: GitlabPipelineInput[];
	local: string;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
};

type ComponentInclude = {
	component: string;
	file?: never;
	inputs?: GitlabPipelineInput[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
};

type ProjectInclude = {
	component: never;
	file: string | string[];
	inputs?: GitlabPipelineInput[];
	local?: never;
	project: string;
	ref?: string;
	remote?: never;
	template?: never;
};

type RemoteInclude = {
	component: never;
	file?: never;
	inputs?: GitlabPipelineInput[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: string;
	template?: never;
};

type TemplateInclude = {
	component: never;
	file?: never;
	inputs?: GitlabPipelineInput[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: string;
};

export type GitlabPipelineInclude = {
	rules?: Pick<GitlabPipelineRule, 'if' | 'exists' | 'changes'>;
} & (
	| LocalInclude
	| ComponentInclude
	| ProjectInclude
	| RemoteInclude
	| TemplateInclude
);
