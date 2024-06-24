type VariableValue = string | boolean | number;

export type GitlabCICDVariables = Record<
	string,
	| VariableValue
	| {
			description?: string;
			expand?: boolean;
			options?: string[];
			value?: VariableValue;
	  }
>;
