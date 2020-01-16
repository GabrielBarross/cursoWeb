const kaizoku = "Luffy"
const nakamas = "Zoro, Sanji, Nami, Brook, Robin, Ussop, Chopper, Franky"
const supernova = "Law 34 Kid 34 Killer 34 Appo 34 Bege"

console.log(kaizoku.charAt(4))
console.log(kaizoku.charCodeAt(3))
console.log(kaizoku.indexOf('y'))

console.log(kaizoku.substring(2))
console.log(kaizoku.substring(1, 4))

console.log('top '.concat(kaizoku).concat(' kaizoku oni ore wa naru'))
console.log('top ' + 'kaizoku' + 'kaizoku oni ore wa naru')
console.log(kaizoku.replace('y', 'g'))

// USING SPLIT, YOU CAN SET WHAT WILL SEPARATE EACH ELEMENT IN THE ARRAY THAT WILL BE CREATED
console.log(nakamas.split(','))
console.log(supernova.split('34'))