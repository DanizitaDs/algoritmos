const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let senha
function nomeSenha(nome){
    if (nome == 'dani'){
    senha == '123'
} 
}
rl.question('Digite seu nome:', (nome1) => {
    if ( nome1 === "dani") {
        console.log('Bem vinda dani')
    }else {
        console.log('nome nao registrado')
    }
    nomeSenha(nome1)
   
   
rl.question('Digite a senha:', (senha) => {
 if ( senha === "123") 
console.log('Login bem-sucedido')
else {
    console.log('Senha incorreta')
}
 
rl.close();
});
});