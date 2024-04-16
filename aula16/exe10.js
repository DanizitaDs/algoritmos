let anterior = 0
let atual = 1

for (let i = 1; i <= 10 ; i++) {
    console.log(atual);
    const proximoTermo = anterior + atual
    anterior = atual
    proximoTermo + anterior
    console.log(proximoTermo)

}