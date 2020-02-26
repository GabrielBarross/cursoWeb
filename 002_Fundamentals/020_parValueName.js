const hello = "hey" // LEXIC CONTEXT 1
function greetings(){
    const nice = "niiiice" // LEXIC CONTEXT 2
    return nice
}

const client = {
    name: 'Jiraya',
    age: 43,
    hairColor: 'white',
    address:{
        city: 'Konoha',
        street: 'Adult Street'
    }
}
console.log(hello + ' ' + greetings())
console.log(client.hairColor)
console.log(client.address.city)
console.log(client)