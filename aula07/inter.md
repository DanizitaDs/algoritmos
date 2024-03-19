1. Leia o código abaixo:
    
 
    const respostaDoUsuario = "90"
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
    RP: Ele transforma srting em number e realiza o resto da porcentagem, conferindo se é par e se é igual a 0.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    RP: ele imprime quando o resultado fica igual a 0
    
    c) Para que tipos de números a mensagem é "Não passou no teste"?
    RP: o tipo que não resulta o numero 0, como: 1,5/5

    2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    ```jsx
    let fruta
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```
    
    a) Para que serve o código acima?
    RP: Para identificar os preços e os nomes das frutas
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    RP: Sera " preco = 2.25 "
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    RP: N sei

    3. Leia o código abaixo:
    
    ```jsx
    const numero = Number(("50"))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
    RP: Esta transformando o string em number.
  
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
  RP:se fosse 10 continuaria mandando a mesma mensagem mas se fosse -10 não seria reproduzido nada

    c) Haverá algum erro no console?
    RP:sim, da undefinid.