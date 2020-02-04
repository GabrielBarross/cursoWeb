// NEW RESOURCE FROM ES2015
const homiranha = {
    name: 'Peter Parker',
    age: 34,
    powers: {
        sticky: "He sticks everywhere",
        superStrength: "He's strong",
        web: "He Swings"
    }
}

const { name: n, powers: { web: w } } = homiranha
console.log(n + ', ' + w)


// SECOND EXAMPLE
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 10] = [4, 21, 1, 7]
console.log(n1, n3, n5, n6)

//THIRD EXAMPLE
const [, [, grade]] = [[1, 2, 3], [4, 5, 6]]
console.log(grade)


// FOURTH EXAMPLE
function rand({ min = 0, max = 1000 }) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}
const obj = { min: 12, max: 20 }
console.log(rand({}));
console.log(rand(obj))
console.log(rand({ min: 995 }))
console.log(rand({ max: 15 }))

//THIRD EXAMPLE
function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand2([50, 40]))
console.log(rand2([40, 50]))
console.log(rand2([40]))
console.log(rand2([, 700]))
