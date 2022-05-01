const compose =
	(...fns) =>
	(value) =>
		fns.reduce((result, fn) => fn(result), value);

export default compose;
