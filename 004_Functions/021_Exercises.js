// EXERCISE ONE
function firstExercise(a,b){
    return a+b
}
console.log("-- First Exercise --")
console.log(+ firstExercise(3,2))
console.log("")


//EXERCISE TWO
function triangleVerification(a,b,c){
    if(a == b && a == c){
        return `Equilátero ${a} ${b} ${c}`
    } else if(a == b || a == c){
        return `Isósceles ${a} ${b} ${c}`
    } else {
        return `Escaleno ${a} ${b} ${c}`
    }
}
console.log("-- Second Exercise --")
console.log(triangleVerification(3,3,3))
console.log(triangleVerification(3,3,2))
console.log(triangleVerification(3,1,2))
console.log("")


//EXERCISE THREE
function calculatePow(a,b){
    return Math.pow(a,b)
}
console.log("-- Third Exercise --")
console.log(calculatePow(2,10))
console.log("")


//EXERCISE FOUR
//divisor = a
//dividendo = b
function divisionExercise(a,b){
    let quotient = Math.floor(b/a);
    let remainder = b % a;
    let results = [quotient, remainder]
    return results
}
console.log("-- Fourth Exercise --")
console.log(divisionExercise(3,16))
console.log("")

//EXERCISE FIVE
//divisor = a
//dividendo = b
function moneyExercise(a,b,coin){
    let mainNumber = (a+b).toFixed(2)
    return `${coin}${mainNumber}`
}
console.log("-- Fifth Exercise --")
console.log(moneyExercise(0.1,0.2,"R$"))
console.log("")

//EXERCISE Six

function moneyExercise(a,b,coin){
    let mainNumber = (a+b).toFixed(2)
    return `${coin}${mainNumber}`
}
console.log("-- Fifth Exercise --")
console.log(moneyExercise(0.1,0.2,"R$"))
console.log("")