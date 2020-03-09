const sum = function(a,b){
    return a+b
}

const showResult = function( a, b, operation = sum){
    console.log(operation(a,b))
}

showResult(3,2)
showResult(4,5,sum)
showResult(5,7, function(a,b){
    return a-b
})
showResult(2,3, (a, b) => a*b)