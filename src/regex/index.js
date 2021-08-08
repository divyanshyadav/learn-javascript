// Is provided string is a 3 number string or not?
let regex = /^\d{3}$/
console.log(regex.test('hel'))
console.log(regex.test('134'))
console.log(regex.test('abc134abc'))

// capture all words
let string = "Hello I am Red John"
// Flags
// g - (global flag) to match regular expression multiple times in the string
// i - case insensitive
console.log(string.match(/\b[a-z]+\b/gi))


// capture all phone numbers
let text = "Hello my phone number is 111-222-3333 and 112.123.1234"
let reg = /\d{3}[-.]\d{3}[-.]\d{4}/g
console.log(text.match(reg))

// capture groups
reg = /(\d{3})[=.](\d{3})[-.](\d{4})/
//      group 1    group 2   group 3
const [match, group1, group2, group3] = text.match(reg)
console.log(match, group1, group2, group3)