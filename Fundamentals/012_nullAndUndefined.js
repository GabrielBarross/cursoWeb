// REFERENCE ATTRIBUTION
const a = { name: "top" }
const b = a
b.name = "Oloquinho"
console.log(a.name)

// SETTING PRIMITIVE VALUES 
let c = 3
let d = c
d++
console.log(d)
console.log(c)

/*WHEN YOU HAVE PRIMITIVE VALUES, YOU CREATE A COPY OF THE VALUE WHEN SETTING
IT TO ANOTHER VARIABLE.
WHEN YOU HAVE A COMPLEX VALUE, THEN YOU ARE JUST REFERENCING THE VALUES ADDRESS */


let mainValue
console.log(mainValue) //UNDEFINED
//console.log(mainValue2) IT'S NOT DEFINED
mainValue = null
console.log(mainValue)