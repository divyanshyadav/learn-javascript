import compose from "./compose";

describe("compose", () => {
	test("case 1", () => {
		const add2 = (x) => x + 2;
		const multiplyBy2 = (x) => x * 2;
		const subtract4 = (x) => x - 4;

		const composed = compose(add2, multiplyBy2, subtract4);
		expect(composed(1)).toBe(2);
	});
});
