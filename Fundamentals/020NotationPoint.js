console.log(Math.ceil(7.2))

const wolverine = {}
wolverine.nome = 'Logan'
wolverine['nome'] = 'James' // NOT USUAL
console.log(wolverine.nome)

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Execution')
    }
}
const obj1 = new Obj('Xavier')
const obj2 = new Obj('Jean Grey')
console.log(obj1.nome + ' ' + obj2.nome)
obj2.exec()