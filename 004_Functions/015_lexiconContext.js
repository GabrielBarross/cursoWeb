const valor = "Global"

function myFunction(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    myFunction()
}

exec()

// MESMO TENDO VALOR = LOCAL MAIS PERTO DE SUA CHAMADA, O MYFUNCTION CARREGA O VALOR = GLOBAL
// POIS ESTÁ RELACIONADO AO CONTEXTO LÉXICO DA FUNÇÃO