function watchError(erro){
    // throw new Error('Alright')
    // throw 10
    // throw false
    // throw 'Isso ai'
    throw {
        name: 'Orácio',
        age: 32,
        data: new Date()
    }
}

function screamedName(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        watchError(e)
    }
    finally{
        console.log('toptoptop')
    }
}

objectOne = {nome: 'top'}
screamedName(objectOne)