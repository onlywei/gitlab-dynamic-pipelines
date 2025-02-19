import type { ParallelMatrix } from './Parallel.ts';

export type JobNeed =
  | string
  | {
      project: string;
      job: string;
      ref?: string;
      artifacts?: boolean;
    }
  | {
      pipeline: string;
      job?: string;
    }
  | {
      job: string;
      optional?: boolean;
      parallel?: ParallelMatrix;
    };
