export type Input =
	| string
	| (string | Record<string, string | string[]>)[] // this is not documented but it works
	| {
			default?: string | string[] | Record<string, string | string[]>;
			description?: string;
			options?: string[];
			regex?: string;
			type?: 'array' | 'string' | 'number' | 'boolean';
	  };
