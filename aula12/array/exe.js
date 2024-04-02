const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Me fale um numero:', (num) => {
    const lista = ['huski','fila','pitibul','pit argentino','pintcher'];
    const numeroEscolhido = lista[num]
console.log('a raça escolhida é',numeroEscolhido)
rl.close();
})