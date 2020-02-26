// FUNCTION WITH NO RETURN
function showSum(a, b) {
    console.log(a + b)
}
console.log(typeof Topmaster)
showSum(2, 3)
showSum(2)
showSum(1, 2, 3, 4, 5, 6)
showSum()


// FUNCTION WITH A RETURN
function sum(a = 1, b = 0) {
    return a + b
}
console.log(sum(1))
console.log(sum(1, 43))
console.log(sum())


// TO STORAGE A FUNCTION INSIDE A VARIABLE
const topSum = function (a, b) {
    console.log(a + b)
}
topSum(2, 3)


const masterSum = (a, b) => {
    return a + b
}
console.log(masterSum(1, 33))

// IMPLICIT RETURN
const substraction = (a, b) => a - b
console.log(substraction(3, 39))