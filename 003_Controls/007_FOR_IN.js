const arrayzera = [1, 2, 3, 4, 5]
for(let i in arrayzera){
    console.log(i + " - " + arrayzera[i])
}


const person = {
    name: "Ana Paula",
    surname: "Barros",
    age: 39,
    favoriteSport: "Yoga"
}
for(let a in person){
    console.log(`${a} is ${person[a]}`)
}