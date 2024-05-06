type AccessOrPublic = {
	access?: 'all' | 'developer' | 'none';
	public?: never;
} | {
	access?: never;
	public?: boolean;
}

type Reports = {
	accessibility?: string;
	annotations?: string;
	api_fuzzing?: string;
	browser_performance?: string;
	coverage_report?: { coverage_format: string; path: string; };
	codequality?: string;
	container_scanning?: string;
	coverage_fuzzing?: string;
	cyclonedx?: string;
	dast?: string;
	dependency_scanning?: string;
	dotenv?: string;
	junit?: string | string[];
	load_performance?: string;
	metrics?: string;
	requirements?: string;
	repository_xray?: string;
	sast?: string;
	secret_detection?: string;
	terraform?: string;
}

export type Artifacts = AccessOrPublic & {
	exclude?: string[];
	expire_in?: string;
	expose_as?: string;
	name?: string;
	paths?: string[];
	reports?: Reports;
	untracked?: boolean;
	when?: 'on_success' | 'on_failure' | 'always';
};
