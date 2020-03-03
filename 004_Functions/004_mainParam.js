// set a main value to the parameters
function sum(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c  
}
console.log(sum(), sum(3), sum(3,2,1), sum(0,0,0))

// Three other different ways to create a main Param
function sum2(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1 // the firs One mean the position of B in parameters
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(sum2(), sum2(3), sum2(3,2,1), sum2(0,0,0))


// es2015 main param value

function sum3(a=1, b=1, c=1){
    return a + b + c
}
console.log(sum3(), sum3(4), sum3(4,3,2), sum3(0,0,0))
