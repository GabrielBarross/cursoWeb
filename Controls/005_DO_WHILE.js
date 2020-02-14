function generateRandom(min, max){
    const value = Math.random() * (max - min) + (min)
    return Math.floor(value)
}

let option = -1

do {
    option = generateRandom(-1 , 10)
    console.log(`This log is set to show ${option}.`)
} while (option != -1)

console.log("See ya")