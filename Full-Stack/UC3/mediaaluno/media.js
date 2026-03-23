let readlineSync = require('readline-sync')

console.log('Coloque as suas duas notas, para descobrir a media ')

let num1 = Number(readlineSync.question('Coloque a sua primeira nota: '))
let num2 = Number(readlineSync.question('Coloque a sua segunda nota: '))

let media = (num1 + num2) / 2;
if (5 > media) {
    console.log(`A media é ${media}, aluno reprovado`)
}
else {
    console.log(`A media é ${media}, aluno aprovado`)
}