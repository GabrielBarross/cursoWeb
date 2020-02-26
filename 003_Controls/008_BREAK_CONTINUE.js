const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

console.log("BREAK EXAMPLE")
for(x in numbers){
    if(x == 5){
        break
    }
    console.log(`${x} - ${numbers[x]}`)
}
console.log("CONTINUE EXAMPLE")
for(x in numbers){
    if(x == 5){
        continue
    }
    console.log(`${x} - ${numbers[x]}`)
}

console.log("NOMENCLATURE EXAMPLE")
externo: for(i in numbers){
    for(g in numbers){
        if(i == 1 && g == 2){
            break externo
        }
        console.log(`${i},${g}`)
    }
}