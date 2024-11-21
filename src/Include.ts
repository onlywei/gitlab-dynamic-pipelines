import type { IncludeInput } from './Input';
import type { Rule } from './Rule';

type LocalInclude = {
	component?: never;
	file?: never;
	inputs?: Record<string, IncludeInput>;
	local: string;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
};

type ComponentInclude = {
	component: string;
	file?: never;
	inputs?: Record<string, IncludeInput>;
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
};

type ProjectInclude = {
	component?: never;
	file: string | string[];
	inputs?: Record<string, IncludeInput>;
	local?: never;
	project: string;
	ref?: string;
	remote?: never;
	template?: never;
};

type RemoteInclude = {
	component?: never;
	file?: never;
	inputs?: Record<string, IncludeInput>;
	local?: never;
	project?: never;
	ref?: never;
	remote?: string;
	template?: never;
};

type TemplateInclude = {
	component?: never;
	file?: never;
	inputs?: Record<string, IncludeInput>;
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: string;
};

export type PipelineRef = {
	rules?: Pick<Rule, 'if' | 'exists' | 'changes'>[];
} & (
	| LocalInclude
	| ComponentInclude
	| ProjectInclude
	| RemoteInclude
	| TemplateInclude
);
