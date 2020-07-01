function getPrice (tax=0, coin="R$"){
    return `${coin}${this.price*(1-this.desc)*(1+tax)}` 
}

const product = {
    name: "CellPhone",
    price: 1732,
    desc: 0.20,
    getPrice
}

console.log(product.getPrice())

const mouse = {price: 32, desc: 0.10}
//CALL EXAMPLES
console.log("CALL -->"+getPrice.call(mouse))
console.log("CALL -->"+getPrice.call(mouse, 0.20, "$"))

//APPLY EXAMPLES
console.log("APPLY -->"+getPrice.apply(mouse))
console.log("APPLY -->"+getPrice.apply(mouse, [0.20, "$"]))