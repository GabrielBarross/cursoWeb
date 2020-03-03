//LITERAL FORM
function funOne(){
}

//STORAGE INSIDE AN VARIABLE
const funTwo = function(){

}

//STORAGE INSIDE AN ARRAY
const array = [
    function(a,b){return a+b},
    funOne, 
    funTwo
]
console.log(array[0](2,3))


//STORAGE INSIDE AN OBJECT
const obj = {
    function(a,b){return a+b},
    funOne,
    funTwo
}
console.log(obj.function(2,6))

//STORAGE AS A OBJECT ATTRIBUTE
const obj2 = {}
obj2.talk = function(){return "Oh Yeah"}
console.log(obj2.talk())

// INSIDE A FUNCTION
function run(funThree){
    funThree()
    console.log(funThree)
}
run(function(a){
    a=1 
    console.log(a)
    }
)


// RETURN A FUNCTION WITH A FUNCTION
function sum(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

sum(2,3)(4)
const fiveMore = sum(2,3)
fiveMore(4)
