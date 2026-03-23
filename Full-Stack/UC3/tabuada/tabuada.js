// Importar as coisas em primeiro lugar
let readlineSync = require('readline-sync')

console.log('Programa que exibe uma tabuada')
let num = 0;
// Ler o numero da tabuada que o usuario escolheo

num = readlineSync.question('Informe um numero: ')

// Exibir a tabuada

for (var x = 0; x<11; x++) {
        console.log(`Tabuada do dois: ${num} * ${x} = ${num*x}`)
}