const one = 1.0
let two = Number('2')

console.log(one, two)
console.log(Number.isInteger(one))
console.log(Number.isInteger(two))

const reviewOne = 9.37
const reviewTwo = 6.2

// BASIC MATH OPERATIONS
const total = reviewOne * one + reviewTwo * two
const media = total / (one + two)

// TO FIXED CONTROLS DECIMAL PLACES
console.log(media.toFixed(2))

// TO SRTING TRANSFORMS NUMBER IN STRINGS
console.log(media.toString())

// IF YOU DEFINE 2 IN TOSTRING THEN YOU HAVE A BINARY NUMBER
console.log(media.toString(2))
console.log(typeof media)

// IF NUMBER IS WRITTEN WITH CAPITAL LETTER, THEN IT IS A FUNCTION
console.log(typeof Number)