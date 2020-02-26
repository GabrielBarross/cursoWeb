// LET HAS A BLOCK SCOPE
let number = 1
{
    let number = 2
    console.log('dentro = ' + number)
}
console.log('fora = ' + number)