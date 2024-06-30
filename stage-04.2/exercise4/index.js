/*    solicitar o nome do aluno e as 3 notas
      do bimestre, calcular a média daquele aluno

      se o aluno passou no bimestre, dar os parabens

      se o aluno não passou no bimestre, motivar o aluno
      a dar seu melhor na prova de recuperação

      em ambos os casos, mostre uma mensagem com o nome
      do aluno e a nota

*/

let student = prompt('Digite seu nome: ')
let grade1 = Number(prompt('digite a nota da primeira prova: '))
let grade2 = Number(prompt('digite a nota da segunda prova: '))
let grade3 = Number(prompt('digite a nota da terceira prova: '))

function average(n1, n2, n3) {
  let result = (n1+n2+n3)/3
  return result.toFixed(2)
}

let media = average(grade1, grade2, grade3)

if (media > 6) {
  alert(`Parabéns, ${student}. Você foi aprovado com média de ${media}!`)
} else {
  alert(`Infelizmente você foi reprovado, ${student}. Sua média atingiu ${media} pontos. Se dedique na prova de recuperação e boa sorte!`)
}