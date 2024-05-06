import type { Input } from './Input.d.ts';

type LocalInclude = {
	component?: never;
	file?: never;
	inputs?: Input[];
	local: string;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
}

type ComponentInclude = {
	component: string;
	file?: never;
	inputs?: Input[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: never;
}

type ProjectInclude = {
	component: never;
	file: string | string[];
	inputs?: Input[];
	local?: never;
	project: string;
	ref?: string;
	remote?: never;
	template?: never;
}

type RemoteInclude = {
	component: never;
	file?: never;
	inputs?: Input[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: string;
	template?: never;
}

type TemplateInclude = {
	component: never;
	file?: never;
	inputs?: Input[];
	local?: never;
	project?: never;
	ref?: never;
	remote?: never;
	template?: string;
}

export type Include = LocalInclude | ComponentInclude | ProjectInclude | RemoteInclude | TemplateInclude;
