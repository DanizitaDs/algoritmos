//concatenação

const palavra = 'Da'
const palavra2 = 'ni'
console.log(palavra + palavra2)

const nome = 'Danielle'
const idade = 16
//console.log('meu nome é' + nome + ',eu tenho' + idade + 'anos') // concatenação
console.log(`Meu nome é ${nome}, eu tenho ${idade} anos.`);

// Template String

const nome2 = 'Danielle';
const time = 'Inter';

console.log('Meu nome é ' + nome2 + ' e tenho um time favorito que é o ' + time + '!!'); // Concatenação
console.log(`Meu nome é ${nome2} e eu tenho um time favorito que é o ${time}!!`); //Template String


const nomeCompleto = 'Danielle Yasmin Dias Padilha';

console.log(nomeCompleto.length); // propriedade length
const frase = 'BANANA'
const fraseMinuscula = frase.toLocaleLowerCase();
const fraseMaiuscula = frase.toUpperCase();

console.log(fraseMinuscula , fraseMaiuscula);

// Método trim()

const email = ' danielle-ydpadilha@educar.gov.br ';
console.log(email.trim());  // Retira os espaços da frente e de trás

// Método includes(caracteres)

const frase2 = 'hoje comi nissin';
//confere se tem a certa palavra ou caractere
console.log(frase2.includes('nissin')); // true
console.log(frase2.includes('cebola')); // false
 
// Método replaceALL (chars1, chars2)

const frase3 = 'hoje eu degustei um nissin gostoso'
const novaFrase = frase3.replaceAll('nissin','gostoso') // troca a frase
console.log(novaFrase)
// hoje eu degustei um gostoso gostoso