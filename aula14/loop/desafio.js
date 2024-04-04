const readlineSync = require('readline-sync');
input = readlineSync.question('me fale um numero: ');
while (input === 0){
    if (Number(input) === 0 ){
        console.log(false)
    }
    contagem++
    }
