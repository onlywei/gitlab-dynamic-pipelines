import type { IncludeInput } from './Input.ts';
import type { Rule } from './Rule.ts';

type ArtifactInclude = {
  artifact: string;
  component?: never;
  file?: never;
  inputs?: never;
  job: string;
  local?: never;
  project?: never;
  ref?: never;
  remote?: never;
  template?: never;
};

type LocalInclude = {
  artifact?: never;
  component?: never;
  file?: never;
  inputs?: Record<string, IncludeInput>;
  job?: never;
  local: string;
  project?: never;
  ref?: never;
  remote?: never;
  template?: never;
};

type ComponentInclude = {
  artifact?: never;
  component: string;
  file?: never;
  inputs?: Record<string, IncludeInput>;
  job?: never;
  local?: never;
  project?: never;
  ref?: never;
  remote?: never;
  template?: never;
};

type ProjectInclude = {
  artifact?: never;
  component?: never;
  file: string | string[];
  inputs?: Record<string, IncludeInput>;
  job?: never;
  local?: never;
  project: string;
  ref?: string;
  remote?: never;
  template?: never;
};

type RemoteInclude = {
  artifact?: never;
  component?: never;
  file?: never;
  inputs?: Record<string, IncludeInput>;
  job?: never;
  local?: never;
  project?: never;
  ref?: never;
  remote?: string;
  template?: never;
};

type TemplateInclude = {
  artifact?: never;
  component?: never;
  file?: never;
  inputs?: Record<string, IncludeInput>;
  job?: never;
  local?: never;
  project?: never;
  ref?: never;
  remote?: never;
  template?: string;
};

export type PipelineRef = {
  rules?: Pick<Rule, 'if' | 'exists' | 'changes'>[];
} & (
  | ArtifactInclude
  | LocalInclude
  | ComponentInclude
  | ProjectInclude
  | RemoteInclude
  | TemplateInclude
);
