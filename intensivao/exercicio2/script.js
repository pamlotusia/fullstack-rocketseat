/* Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.*/

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 1
let num2 = 2
console.log(num1 + num2)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
console.log(typeof num1)
if(typeof num1 == 'number'){
  console.log('É um número')
} else {
  console.log('Não é um número')
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let word = 'word'
if(typeof word == 'string'){
  console.log('É uma string')
} else {
  console.log('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let boolean = true
if(typeof boolean == 'boolean'){
  console.log('É um booleano')
} else {
  console.log('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
console.log(num1 - num2)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
console.log(num1 * num2)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
console.log(num1 / num2)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let num3 = 30
if(num3 % 2 == 0){
  console.log("É um número par")
} else{
  console.log("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let num4 = 15
if(num4 % 2 != 0){
  console.log("É um número ímpar")
} else{
  console.log("Não é um número ímpar")
}