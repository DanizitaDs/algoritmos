const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Me de uma frase:', (frase) => {
    console.log('sua frase maiuscula:', frase.toUpperCase());
    console.log('sua frase com todas as letras que possui O por I:', frase.replaceAll('o','i'));
    console.log('o tamanho da frase:', frase.length);

    rl.close();
})
