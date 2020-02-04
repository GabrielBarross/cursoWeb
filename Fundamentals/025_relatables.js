console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', 01 === 1)

console.log('04)', 03 != 3)
console.log('05)', '3' !== 3)
console.log('06)', 4 > 3)
console.log('07)', 4 < 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('08)', d1 == d2)
console.log('09)', d1 === d2)
console.log('10)', d1.getTime() == d2.getTime(), d1.getTime() === d2.getTime())

var a = 1 - 1 === 0 ? 'deu true' : 'deu false';
function bla() {
    if (1 - 1 === 0)
        return 'deu true';
    else
        return 'deu false';
}

console.log('O a', a)
console.log('function', bla())
console.log('11)', undefined == null)
console.log('12)', undefined === null)
