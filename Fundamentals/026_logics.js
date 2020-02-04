function shopping(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTV50 = work1 && work2
    // const buyTV32 = !!(work1 ^ work2) bitwise operator (EXCLUSIVE OR)
    const buyTV32 = work1 != work2
    const healthy = !buyIceCream

    return {
        buyIceCream,
        buyTV50,
        buyTV32,
        healthy
    }
}
console.log(shopping(false, true))