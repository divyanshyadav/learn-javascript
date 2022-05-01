// left to right
export const pipe =
	(...fns) =>
	(value) =>
		fns.reduce((result, fn) => fn(result), value);

// Right to left
export const compose =
	(...fns) =>
	(value) =>
		fns.reduceRight((res, fn) => fn(res), value);
