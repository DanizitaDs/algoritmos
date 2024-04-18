// Atividade 3:
const carrinho = [];

const frutaB = {
    nome: 'banana',
    disponibilidade: true
}
const frutaM ={
    nome: 'maça',
    disponibilidade: true
}
const frutaMa ={
    nome:'mamão',
    disponibilidade: true
}

function puchar(fruta1,fruta2,fruta3){
    carrinho.push(fruta1,)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}

puchar(frutaB,frutaM,frutaMa)
console.log(carrinho)

function fruta(disponivel){
    disponivel.disponibilidade = !disponivel.disponibilidade 
}
fruta(frutaB)
console.log(carrinho)