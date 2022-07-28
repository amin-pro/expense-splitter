// TODO : become sure range() is working as intended
export function* range(start: number, end: number) {
	for (; start <= end; ++start) {
		yield start;
	}
}

function last<T>(arr: T[]) {
	return arr[arr.length - 1];
}

export function* numericCombinations(
	n: number,
	r: number,
	loc: number[] = []
): IterableIterator<number[]> {
	const idx = loc.length;
	if (idx === r) {
		yield loc;
		return;
	}
	for (const next of range(idx ? last(loc) + 1 : 0, n - r + idx)) {
		yield* numericCombinations(n, r, loc.concat(next));
	}
}

export function* combinations<T>(arr: T[], r: number): IterableIterator<T[]> {
	for (const idxs of numericCombinations(arr.length, r)) {
		yield idxs.map((i) => arr[i]);
	}
}
