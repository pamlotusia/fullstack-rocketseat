/*    Capaturar 2 numeros
      e fazer as operações matematicas de soma
      subtração, multiplicação, divisão e resto 
      da divisão

      **desafio extra
      - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
      - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
      e para cada operação, mostrar um alerta com o resultado
 */
let firstNumber = Number(prompt('Digite o primeiro numero'))
let secondNumber = Number(prompt('digite o segundo numero: '))

function sum(n1,n2){
  return n1+n2
}
function subtraction(n1,n2){
  return n1-n2
}
function multiplication(n1,n2){
  return n1*n2
}
function division(n1,n2){
  return n1/n2
}
function restByDivision(n1,n2){
  return n1%n2
}

let math = [sum, subtraction, multiplication, division, restByDivision]

math.forEach((operation)=>{
  alert(`${operation.name} : ${operation(firstNumber, secondNumber)}`)
})

if(sum(firstNumber, secondNumber) % 2 == 0){
  alert('A soma dos números é par')
} else{
  alert('A soma dos números é ímpar')
}

if(firstNumber == secondNumber){
  alert('Os dois números inseridos são iguais.')
} else {
  alert('Os dois números inseridos são diferentes.')
}

