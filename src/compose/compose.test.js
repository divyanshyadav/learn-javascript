import { pipe, compose } from "./compose";

describe("compose Utils", () => {
	test("pipe", () => {
		const add2 = (x) => x + 2;
		const multiplyBy2 = (x) => x * 2;
		const subtract4 = (x) => x - 4;

		const composed = pipe(add2, multiplyBy2, subtract4);
		expect(composed(1)).toBe(2);
	});

	test("compose", () => {
		const add2 = (x) => x + 2;
		const multiplyBy2 = (x) => x * 2;
		const subtract4 = (x) => x - 4;

		const composed = compose(subtract4, multiplyBy2, add2);
		expect(composed(1)).toBe(2);
	});

	test("check palindrome", () => {
		const splitBySpace = (str) => str.split(" ");
		const split = (str) => str.split("");
		const join = (arr) => arr.join("");
		const lower = (str) => str.toLowerCase();
		const reverse = (arr) => arr.reverse();

		// const frw = (str) => str.split(" ").join("").toUpperCase();
		const frw = pipe(splitBySpace, join, lower);

		// const rev = (str) => sanitize(str).split("").reverse().join("");
		const rev = pipe(frw, split, reverse, join);

		const isPalindrome = (str) => frw(str) === rev(str);
		expect(isPalindrome("Abcf cba")).toBe(true);
	});
});
