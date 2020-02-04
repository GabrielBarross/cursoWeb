// LOOP VAR EXAMPLE
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('var=' + i)

const funcs = []
for (var o = 0; o < 10; o++) {
    funcs.push(function () {
        console.log(o)
    })
}
funcs[2]()
funcs[8]()


// LOOP LET EXAMPLE
for (let a = 0; a < 10; a++) {
    console.log(a)
}
// console.log('let='+a) ERROR

const funcs2 = []
for (let e = 0; e < 10; e++) {
    funcs2.push(function () {
        console.log(e)
    })
}
funcs2[2]()
funcs2[8]()