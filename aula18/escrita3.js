// a)
const carrinho = [];

// b)

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

//c)

function puchar(fruta1,fruta2,fruta3){
    carrinho.push(fruta1,)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}

// D)

puchar(frutaB,frutaM,frutaMa)
console.log(carrinho)