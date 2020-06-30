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



