function generateRandom(min, max){
    const value = Math.random() * (max - min) + (min)
    return Math.floor(value)
}

let option = 0

while (option != -1){
    option = generateRandom(-1 , 10)
    console.log(`This log is set to show ${option}.`)
}

console.log("See ya")