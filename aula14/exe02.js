const readlineSync = require('readline-sync');

const num1 = readlineSync.question('me fale um numero: ');
const num2 = readlineSync.question('me fale um segundo numero: ');

if (Number(num1) % 2 === 0){
    console.log(Number(num1) * Number(num2))
} else if (Number(num2) % 2 === 0){
    console.log(Number(num1) * Number(num2))
}else{
    console.log('impossivel de realizar a operacao')
}
