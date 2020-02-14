const showGrade = function(value){
    switch(Math.floor(value)){
        case 10:
        case 9:
            console.log("Honor Prize")
            break
        case 8: case 7: case 6:
            console.log("Approved")
            break
        case 5: case 4:
            console.log("New Test")
            break
        case 3: case 2: case 1: case 0:
            console.log("You're fucked")
            break
        default:
            console.log("Nota Inválida")
    }
}
showGrade(10)
showGrade(3)
showGrade(6.5)
showGrade(-52)