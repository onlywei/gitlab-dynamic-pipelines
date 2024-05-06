import type { ParallelMatrix } from './Parallel.js';

export type Need = string | {
	project: string;
	job: string;
	ref?: string;
	artifacts?: boolean;
} | {
	pipeline: string;
	job?: string;
} | {
	job: string;
	optional?: boolean;
	parallel?: ParallelMatrix;
}
