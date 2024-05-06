import type { Need } from './Need.js';
import type { Artifacts } from './Artifacts.js';
import type { ParallelMatrix } from './Parallel.js';
import type { Include } from './Include.js';
import type { Variables } from './Variables.js';

type Cache = {
	fallback_keys?: string[];
	key?: string | { files: string[]; prefix?: string };
	paths: string[];
	policy?: 'pull' | 'push' | 'pull-push' | `$${string}`;
	unprotect?: boolean;
	untracked?: boolean;
	when?: 'on_success' | 'on_failure' | 'always';
}

type Environment = {
	action?: 'start' | 'prepare' | 'stop' | 'verify' | 'access';
	auto_stop_in?: string;
	deployment_tier: 'production' | 'staging' | 'testing' | 'development' | 'other';
	kubernetes?: { namespace: string };
	name: string;
	on_stop?: string;
	url?: string;
}

type Hooks = {
	pre_get_sources_script?: string | string[];
}

type IdToken = {
	aud: string;
}

type Inherit = {
	default?: boolean | string[];
	variables?: boolean | string[];
}

type Image = {
	name: string;
	command?: string | string[];
	docker?: { platform?: string; user: string };
	entrypoint?: string | string[];
	pull_policy?: 'always' | 'if-not-present' | 'never';
}

type Link = {
	name: string;
	url: string;
	filepath?: string;
	link_type?: string;
}

type Release = {
	tag_name: string;
	tag_message?: string;
	name?: string;
	description: string;
	ref?: string;
	milestones?: string;
	released_at?: string;
	assets?: { links?: Link[] }
}

type Retry = 0 | 1 | 2 | {
	max?: 0 | 1 | 2;
	when?: 'always' | 'unknown_failure' | 'script_failure' | 'api_failure' | 'stuck_or_timeout_failure' | 'runner_system_failure' | 'runner_unsupported' | 'stale_schedule' | 'job_execution_timeout' | 'archived_failure' | 'unmet_prerequisites' | 'scheduler_failure' | 'data_integrity_failure';
	exit_codes?: number | number[];
}

type Secret = {
	vault?: string | {
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
}

type Service = Image & {
	alias?: string;
	variables?: Variables;
}

type Trigger = ({
	include: string | Include[];
} | {
	project: string;
	branch: string;
}) & {
	forward?: { yaml_variables?: boolean; pipeline_variables?: boolean; };
	strategy?: string;
}

export type GitlabJob = {
	after_script?: string | string[];
	allow_failure?: boolean | { exit_codes: number | number[] };
	artifacts?: Artifacts;
	before_script?: string | string[];
	cache?: Cache;
	coverage?: `/${string}/`;
	dast_configuration?: { site_profile?: string; scanner_profile?: string };
	dependencies?: string[];
	environment?: string | Environment;
	extends?: string | string[];
	hooks?: Hooks;
	identity?: 'google_cloud';
	id_tokens?: Record<string, IdToken>;
	image?: string | Image;
	inherit?: Inherit;
	interruptible?: boolean;
	needs?: Need[];
	parallel?: number | ParallelMatrix;
	release?: Release;
	resource_group?: string;
	retry?: Retry;
	script?: string | string[];
	secrets?: Record<string, Secret>;
	services?: string[] | Service[];
	stage?: string;
	tags?: string[];
	timeout?: string;
	trigger?: string | Trigger;
	variables?: Variables;
	when?: 'on_success' | 'on_failure' | 'never' | 'always' | 'manual' | 'delayed';
}

export type GitlabJobDefaults = Pick<
	GitlabJob,
	'after_script' |
	'artifacts' |
	'before_script' |
	'cache' |
	'hooks' |
	'identity' |
	'id_tokens' |
	'image' |
	'interruptible' |
	'retry' |
	'services' |
	'tags' |
	'timeout'
>;
