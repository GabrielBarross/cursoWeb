console.log(soma(3,2)) 
//UTILIZANDO FUNCTION DECLARATION, É POSSÍVEL UTILIZAR A FUNÇÃO ANTES DA MESMA SER DECLARADAS, 
//POIS O INTERPRETADOR JS CARREGA TODAS AS FUNÇÕES ANTES DE RODA O CÓDIGO.

//console.log(sub(3,3)) --> ERRO CASO SEJA ATIVADA AQUI

//function declaration
function soma(x,y){
    return x+y
}

//function expression
const sub = function(x,y){
    return x-y
}

//named function expression --> POUCO USADA
const mult = function mult(x,y){
    return x*y
}

