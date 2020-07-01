class Person{
    constructor(name){
        this.name = name
    }

    talk(){
        console.log("My name is "+ this.name)
    }
}
const john = new Person("John")
john.talk()


const otherPerson = name => {
    return{
        talk: () => console.log("My name is "+ name)
    }
} 
const other = otherPerson("Larissa")
other.talk()


// FROM HERE BELOW THERE IS A TEST PROPOSED BY THE TEACHER
function lastPerson(name){
    this.name = name
    this.talk = function(){
        console.log("Hi, my name is "+this.name)
    }
}
const last = new lastPerson("Mario")
last.talk()

