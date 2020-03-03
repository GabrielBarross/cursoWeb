function area(height, width){
    const mainArea = height*width 
    if(mainArea > 20){
        console.log(`Maximum area size permitted is 20 yours is ${mainArea}`)
    } else {
        return mainArea
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,5,6,7,8))
// THIS NEXT ONE WILL PRINT TWO THINGS, THE MAIN TEXT AND UNDEFINED
// BECAUSE THE IF CONDITION DOES NOT RETURN ANY DATA, ONLY APPLY A CONSOLE.LOG
console.log(area(5,5))
area(5,5)