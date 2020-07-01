//SIMPLE FACTORY FUNCTION
function createPerson(){
    return {
        name: "Bárbara",
        age: "23"
    }
}
console.log(createPerson())


// FACTORY FUNCTION WITH PARAMS
function createProduct(productName, productPrice, discountPercentage, taste){
    let discountValue = (discountPercentage*productPrice)/100
    return {
        name: productName,
        price: productPrice,
        discount: discountValue,
        taste
    }
}

console.log(createProduct("Bala", 32.00, 20, "Doce"))
