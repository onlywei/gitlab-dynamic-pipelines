import type { ScalarTag } from 'yaml';

export class ReferenceTag {
	sequence: string[];

	constructor(sequence: string[]) {
		this.sequence = sequence;
	}

	toString() {
		return `[${this.sequence.join(', ')}]`;
	}
}

export const referenceTag: ScalarTag = {
	tag: '!reference',
	identify: (v) => v instanceof ReferenceTag,
	resolve() {}, // Not sure why, but this function never gets called and is required on the type.
	stringify({ value }) {
		const { sequence } = value as ReferenceTag;
		return `[${sequence.join(', ')}]`;
	},
};
