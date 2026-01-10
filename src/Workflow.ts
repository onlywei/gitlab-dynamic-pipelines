import type { Rule } from './Rule.ts';

interface AutoCancelConfig {
  on_new_commit?: 'conservative' | 'interruptible' | 'none';
  on_job_failure?: 'all' | 'none';
}

type WorkflowRule = Pick<Rule, 'if' | 'changes' | 'exists' | 'variables'> & {
  when?: 'always' | 'never';
  auto_cancel?: AutoCancelConfig;
};

export interface Workflow {
  auto_cancel?: AutoCancelConfig;
  name?: string;
  rules?: WorkflowRule[];
}
