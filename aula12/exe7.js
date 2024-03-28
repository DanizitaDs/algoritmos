function descricao(nome,idade,serie){
    let resultado;
    resultado = (`Olá ${nome}! Sua idade é ${idade} e você gosta de assistir ${serie}!`);
    return resultado;
}
console.log(descricao('Dani',16,'Rivardale'))