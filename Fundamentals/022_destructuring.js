// NEW RESOURCE FROM ES2015
const homiranha = {
    name: 'Peter Parker',
    age: 34,
    powers:{
        sticky: "He sticks everywhere",
        superStrength: "He's strong",
        web: "He Swings"
    }
}

const { name: n , powers: {web: w} } = homiranha
console.log(n + ', ' + w)