type Primitive = boolean | number | string;

export type IncludeInput =
	| Primitive
	| Primitive[]
	| Record<string, Primitive | Primitive[]>[];

export type ComponentInputSpec = {
	default?: IncludeInput;
	description?: string;
	options?: string[];
	regex?: string;
	type?: 'array' | 'string' | 'number' | 'boolean';
};
