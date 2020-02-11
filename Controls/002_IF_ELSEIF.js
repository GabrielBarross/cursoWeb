Number.prototype.between = function(begin, end){
    return this >= begin && this <= end
}

const showResults = (grade) =>{
    if(grade.between(9,10)){
        console.log("Honor Prize")
    }
    else if(grade.between(7,8.99)){
        console.log("Approved")
    }
    else if(grade.between(4,6.99)){
        console.log("Retake Test")
    }else if(grade.between(0,3.99)){
        console.log("Se Fodeu")
    }else{
        console.log("Not a valid grade")
    }
}

showResults(1)
showResults(9.9)
showResults(7.3)
showResults(5)
showResults(11)