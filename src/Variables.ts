import type { ReferenceTag } from './referenceTag';

type VariableValue = string | boolean | number | ReferenceTag;

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
