function* numGenerator() {
	yield* generator1();
	yield 4;
	yield* generator2();
}

function* generator1() {
	yield 1;
	yield 2;
	yield 3;
}

function* generator2() {
	yield 5;
	yield 6;
	yield 7;
}

const nums = numGenerator();

for (num of nums) {
	console.log(num);
}
