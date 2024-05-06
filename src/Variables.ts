export type GitlabCICDVariables = Record<
	string,
	| string
	| {
			description?: string;
			expand?: boolean;
			options?: string[];
			value?: string;
	  }
>;
