import type { ParallelMatrix } from './Parallel';

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
