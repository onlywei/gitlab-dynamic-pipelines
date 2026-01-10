import type { IncludeInput } from './Input.ts';
import type { Rule } from './Rule.ts';

interface ArtifactInclude {
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
}

interface LocalInclude {
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
}

interface ComponentInclude {
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
}

interface ProjectInclude {
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
}

interface RemoteInclude {
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
}

interface TemplateInclude {
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
}

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
