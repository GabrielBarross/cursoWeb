// --------- FIRST CALLBACK EXAMPLE ------------
const companies = ["Marvel", "DC", "Image Comics", "Valiant"]

const show = function (name, index){
    console.log(`${index + 1}- ${name}`)
}
companies.forEach(show)
// companies.forEach(function(company){
//     console.log(company)
// })
companies.forEach(company => console.log(company))



// -------- SECOND EXAMPLE ------------
const grades = [2, 4, 10, 8, 9, 6, 7.5, 6.8, 3]
let badGrades = []
for (let i in grades){
    if(grades[i] < 7){
        badGrades.push(grades[i])
    }
}
console.log(badGrades)