/*    Capaturar 2 numeros
      e fazer as operações matematicas de soma
      subtração, multiplicação, divisão e resto 
      da divisão

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