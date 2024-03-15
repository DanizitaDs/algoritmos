let pais = 'brasil'

if (pais === 'europa'){
    console.log('europeu')
} else if (pais === 'inglaterra') {
console.log('ingles')
} else if (pais === 'brasil') {
console.log('brasileiro') }
 else {
    console.log('não é nada')
}

// OU:
//   Mais Pratico:

let pai = 'vagner'

switch (pai){
  case 'didi':
    console.log('é o pai! didi')
       break
 case 'vagner':
        console.log('voce é o pai! vagner')
        break
    case 'joão':
        console.log('voce é pai! joão')
        break
        default:
        console.log('voce não tem pai!!')
     break
}