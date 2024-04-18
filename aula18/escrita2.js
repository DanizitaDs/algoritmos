const duda = {
    nome: 'duda',
    idade: 17,
    profissão: 'doutora'
}
const dani = {
    nome: 'dani',
    idade: 16,
    profissão: 'programadora'
}

// B)

function transformar(dani){
const resultado = [dani.nome,dani.nome.length,dani.idade,dani.profissão,dani.profissão.length]
return resultado
} 
console.log(transformar(dani))