import type { ArtifactsConfig } from './Artifacts';
import type { PipelineRef } from './Include';
import type { JobNeed } from './Need';
import type { ParallelMatrix } from './Parallel';
import type { Rule } from './Rule';
import type { GitlabCICDVariables } from './Variables';
import type { ReferenceTag } from './referenceTag';

type JobCache = {
	fallback_keys?: string[];
	key?: string | { files: string[]; prefix?: string };
	paths: string[];
	policy?: 'pull' | 'push' | 'pull-push' | `$${string}`;
	unprotect?: boolean;
	untracked?: boolean;
	when?: 'on_success' | 'on_failure' | 'always';
};

type JobEnvironment = {
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

type JobHooks = {
	pre_get_sources_script?: string | string[];
};

type JobIdToken = {
	aud: string;
};

type JobInheritConfig = {
	default?: boolean | string[];
	variables?: boolean | string[];
};

type JobImage = {
	name: string;
	command?: string | string[];
	docker?: { platform?: string; user: string };
	entrypoint?: string | string[];
	pull_policy?: 'always' | 'if-not-present' | 'never';
};

type ReleaseLinkAsset = {
	name: string;
	url: string;
	filepath?: string;
	link_type?: string;
};

type JobReleaseConfig = {
	tag_name: string;
	tag_message?: string;
	name?: string;
	description: string;
	ref?: string;
	milestones?: string;
	released_at?: string;
	assets?: { links?: ReleaseLinkAsset[] };
};

type JobRetryConfig =
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

type JobSecret = {
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

type JobService = JobImage & {
	alias?: string;
	variables?: GitlabCICDVariables;
};

type TriggerConfig = (
	| {
			include: string | PipelineRef[];
	  }
	| {
			project: string;
			branch: string;
	  }
) & {
	forward?: { yaml_variables?: boolean; pipeline_variables?: boolean };
	strategy?: string;
};

type Script = string | ReferenceTag | (string | ReferenceTag)[];

export type Job = {
	after_script?: Script;
	allow_failure?: boolean | { exit_codes: number | number[] };
	artifacts?: ArtifactsConfig;
	before_script?: Script;
	cache?: JobCache;
	coverage?: `/${string}/`;
	dast_configuration?: { site_profile?: string; scanner_profile?: string };
	dependencies?: string[];
	environment?: string | JobEnvironment;
	extends?: string | string[];
	hooks?: JobHooks;
	identity?: 'google_cloud';
	id_tokens?: Record<string, JobIdToken>;
	image?: string | JobImage;
	inherit?: JobInheritConfig;
	interruptible?: boolean;
	needs?: JobNeed[];
	parallel?: number | ParallelMatrix;
	release?: JobReleaseConfig;
	resource_group?: string;
	retry?: JobRetryConfig;
	rules?: Rule[];
	script?: Script;
	secrets?: Record<string, JobSecret>;
	services?: string[] | JobService[];
	stage?: string;
	tags?: string[];
	timeout?: string;
	trigger?: string | TriggerConfig;
	variables?: GitlabCICDVariables;
	when?:
		| 'on_success'
		| 'on_failure'
		| 'never'
		| 'always'
		| 'manual'
		| 'delayed';
};

export type JobDefaults = Pick<
	Job,
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
