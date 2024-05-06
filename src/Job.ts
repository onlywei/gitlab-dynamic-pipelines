import type { GitlabJobArtifacts } from './Artifacts';
import type { GitlabPipelineInclude } from './Include';
import type { GitlabJobNeed } from './Need';
import type { ParallelMatrix } from './Parallel';
import type { GitlabPipelineRule } from './Rule';
import type { GitlabPipelineVariables } from './Variables';

type GitlabJobCache = {
	fallback_keys?: string[];
	key?: string | { files: string[]; prefix?: string };
	paths: string[];
	policy?: 'pull' | 'push' | 'pull-push' | `$${string}`;
	unprotect?: boolean;
	untracked?: boolean;
	when?: 'on_success' | 'on_failure' | 'always';
};

type GitlabJobEnvironment = {
	action?: 'start' | 'prepare' | 'stop' | 'verify' | 'access';
	auto_stop_in?: string;
	deployment_tier:
		| 'production'
		| 'staging'
		| 'testing'
		| 'development'
		| 'other';
	kubernetes?: { namespace: string };
	name: string;
	on_stop?: string;
	url?: string;
};

type GitlabJobHooks = {
	pre_get_sources_script?: string | string[];
};

type GitlabJobIdToken = {
	aud: string;
};

type GitlabJobInheritConfig = {
	default?: boolean | string[];
	variables?: boolean | string[];
};

type GitlabJobImage = {
	name: string;
	command?: string | string[];
	docker?: { platform?: string; user: string };
	entrypoint?: string | string[];
	pull_policy?: 'always' | 'if-not-present' | 'never';
};

type GitlabReleaseLinkAsset = {
	name: string;
	url: string;
	filepath?: string;
	link_type?: string;
};

type GitlabJobReleaseConfig = {
	tag_name: string;
	tag_message?: string;
	name?: string;
	description: string;
	ref?: string;
	milestones?: string;
	released_at?: string;
	assets?: { links?: GitlabReleaseLinkAsset[] };
};

type GitlabJobRetryConfig =
	| 0
	| 1
	| 2
	| {
			max?: 0 | 1 | 2;
			when?:
				| 'always'
				| 'unknown_failure'
				| 'script_failure'
				| 'api_failure'
				| 'stuck_or_timeout_failure'
				| 'runner_system_failure'
				| 'runner_unsupported'
				| 'stale_schedule'
				| 'job_execution_timeout'
				| 'archived_failure'
				| 'unmet_prerequisites'
				| 'scheduler_failure'
				| 'data_integrity_failure';
			exit_codes?: number | number[];
	  };

type GitlabJobSecret = {
	vault?:
		| string
		| {
				engine?: { name?: string; path?: string };
				path?: string;
				field?: string;
		  };
	gcp_secret_manager?: {
		name?: string;
		version?: number;
	};
	azure_key_vault?: {
		name?: string;
		version?: string;
	};
	file?: boolean;
	token?: string;
};

type GitlabJobService = GitlabJobImage & {
	alias?: string;
	variables?: GitlabPipelineVariables;
};

type GitlabTriggerConfig = (
	| {
			include: string | GitlabPipelineInclude[];
	  }
	| {
			project: string;
			branch: string;
	  }
) & {
	forward?: { yaml_variables?: boolean; pipeline_variables?: boolean };
	strategy?: string;
};

export type GitlabJob = {
	after_script?: string | string[];
	allow_failure?: boolean | { exit_codes: number | number[] };
	artifacts?: GitlabJobArtifacts;
	before_script?: string | string[];
	cache?: GitlabJobCache;
	coverage?: `/${string}/`;
	dast_configuration?: { site_profile?: string; scanner_profile?: string };
	dependencies?: string[];
	environment?: string | GitlabJobEnvironment;
	extends?: string | string[];
	hooks?: GitlabJobHooks;
	identity?: 'google_cloud';
	id_tokens?: Record<string, GitlabJobIdToken>;
	image?: string | GitlabJobImage;
	inherit?: GitlabJobInheritConfig;
	interruptible?: boolean;
	needs?: GitlabJobNeed[];
	parallel?: number | ParallelMatrix;
	release?: GitlabJobReleaseConfig;
	resource_group?: string;
	retry?: GitlabJobRetryConfig;
	rules?: GitlabPipelineRule[];
	script?: string | string[];
	secrets?: Record<string, GitlabJobSecret>;
	services?: string[] | GitlabJobService[];
	stage?: string;
	tags?: string[];
	timeout?: string;
	trigger?: string | GitlabTriggerConfig;
	variables?: GitlabPipelineVariables;
	when?:
		| 'on_success'
		| 'on_failure'
		| 'never'
		| 'always'
		| 'manual'
		| 'delayed';
};

export type GitlabJobDefaults = Pick<
	GitlabJob,
	| 'after_script'
	| 'artifacts'
	| 'before_script'
	| 'cache'
	| 'hooks'
	| 'identity'
	| 'id_tokens'
	| 'image'
	| 'interruptible'
	| 'retry'
	| 'services'
	| 'tags'
	| 'timeout'
>;
