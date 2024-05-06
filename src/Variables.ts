export type Variables = Record<string, string | {
	description?: string;
	expand?: boolean;
	options?: string[];
	value?: string;
}>
