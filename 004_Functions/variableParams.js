function sum(){
    let thisSum = 0
    for(i in arguments){
        thisSum += arguments[i]
    }
    return thisSum
}

console.log(sum())
console.log(sum(1,2,3,4))
console.log(sum(" even ", "with ", "strings"))