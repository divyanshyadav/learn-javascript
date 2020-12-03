const regex = /^\d{3}$/
console.log(regex.test('hel'))
console.log(regex.test('134'))

const string = "Hello I am Red John"
// Flags
// g - (global flag) to match regular expression multiple times in the string
// i - case insensitive
console.log(string.match(/\b[a-z]+\b/gi))



// capture phone numbers
const text = "Hello my phone number is 111-222-3333 and 112.123.1234"
const reg = /\d{3}[-.]\d{3}[-.]\d{4}/g
console.log(text.match(reg))

