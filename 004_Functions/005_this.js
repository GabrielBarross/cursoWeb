// Scopes for this AND BIND FUNCTION
const person = {
    phrase: "OHHH YEAH",
    talk(){
        console.log(this.phrase)
    }
}
person.talk()

const talkPerson = person.talk
talkPerson() // This kind of connection can't understand in what scope the THIS is

const personTalk = person.talk.bind(person) //BIND FUNCTION SET THE SCOPE FOR "THIS"
personTalk()




// SECOND EXAMPLE FOR THIS
function people(){
    this.age = 0

    const self = this
    setInterval(function(){
        self.age++
        console.log(self.age)
    }/*.bind(this)*/, 1000)
}

new people