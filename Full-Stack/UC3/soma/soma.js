let readlineSync = require('readline-sync')
let num1 = 0;
let num2 = 0;

num1 = readlineSync.questionInt('Digite o primeiro numero: ')
num2 = readlineSync.questionInt('Digite o segundo numero: ')

let soma = num1 + num2;
console.log(`A soma dos numeros são ${num1} + ${num2} = ${soma}`)
