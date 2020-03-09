// WITHOUT CALLBACK
const grades = [2, 4, 10, 8, 9, 6, 7.5, 6.8, 3]
let badGrades = []
for (let i in grades){
    if(grades[i] < 7){
        badGrades.push(grades[i])
    }
}
console.log(badGrades)


// WITH CALLBACK
let badGrades2 = []
badGrades2 = grades.filter((grade) => grade < 7)
console.log(badGrades2)

//WITH CALLBACK AND BEING ABLE TO USE AGAIN
const lessThanSeven = grade => grade < 7
const badGrades3 = grades.filter(lessThanSeven)
console.log(badGrades3)