//one
let double = function(a){
    return 2*a
}
//two
double = (a) =>{
    return 2*a
}
//three
double = a => 2*a //implicit return
//console
console.log(double(Math.PI))


// STRING ARROW FUNCTION
const hello = function(){
    return "Hello"
}
hi = () => "hi"
hey = _ => "hey" //Has a param
console.log(hello())
console.log(hi())
console.log(hey())