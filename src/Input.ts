export type Input =
	| string
	| {
			default?: string;
			description?: string;
			options?: string[];
			regex?: string;
			type?: 'array' | 'string' | 'number' | 'boolean';
	  };
