import { stringify } from 'yaml';
import type { PipelineRef } from './Include.ts';
import type { ComponentInputSpec } from './Input.ts';
import type { Job, JobDefaults } from './Job.ts';
import { referenceTag } from './referenceTag.ts';
import type { GitlabCICDVariables } from './Variables.ts';
import type { Workflow } from './Workflow.ts';

export type { PipelineRef } from './Include.ts';
export type { Job } from './Job.ts';
export type { JobNeed } from './Need.ts';
export { ReferenceTag } from './referenceTag.ts';

export interface YAMLHeader {
  spec?: { inputs?: Record<string, ComponentInputSpec> };
}

export interface GlobalKeywords {
  default?: JobDefaults;
  include?: string | PipelineRef[];
  pages?: Job & { publish?: string; path_prefix?: string };
  stages?: string[];
  variables?: GitlabCICDVariables;
  workflow?: Workflow;
}

export interface Pipeline {
  header?: YAMLHeader;
  globalKeywords: GlobalKeywords;
  jobs: Record<string, Job>;
}

export function toYAML(pipeline: Pipeline) {
  const stringifyOptions = { customTags: [referenceTag] };
  let result = '';

  if (pipeline.header) {
    result += stringify(pipeline.header, stringifyOptions);
    result += '---\n\n';
  }

  if (Object.keys(pipeline.globalKeywords).length) {
    result += stringify(pipeline.globalKeywords, stringifyOptions);
  }

  if (Object.keys(pipeline.jobs).length) {
    result += stringify(pipeline.jobs, stringifyOptions);
  }

  return result;
}
