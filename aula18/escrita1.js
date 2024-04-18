// Exercicio 1:

const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 
 
 function trocar(objeto){
 const nova = {...objeto
}
console.log(`Eu sou ${nova.nome}, mas pode me chamar de: ${nova.apelidos[0]}, ${nova.apelidos[1]} ou ${nova.apelidos[2]}.`)
}
trocar(pessoa)

// b)

const nova2 = {...pessoa,
 apelidos: ['xuxa','feioso','xixi']
}
trocar(nova2)