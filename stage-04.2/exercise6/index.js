/*    Jogo da adivinhação

      apresente ao usuario: adivinhe o numero que estou pensando
      entre 0 e 10

      crie uma logica para gerar um numero aleatorio e 
      verifique se o numero digitado é o mesmo que o aleatorio
      gerado pelo sistema

      enquanto o usuario nao adivinhar o numero, mostre a mensagem: 
      'Erro, tente novamente'

      caso o usuario acerte, apresente a mensagem:
      'Parabens!Você adivinhou o numero em x tentativas'

      substitua o 'x' da mensagem, pelo numero de tentativas
*/

let guest = Number(prompt('Adivinhe o numero em que estou pensando de 0 a 10'))

const result = Math.floor(Math.random() * 10) //random para gerar, floor para arredondar para o numero inteiro mais proximo, o parametro * 10 é para determinar um limite, o random vai gerar de 0 a 10
let match = 1

while(guest != result){
  guest = prompt('Erro, tente novamente:')
  match++
  console.log(guest , result)
} alert(`Parabens!Você adivinhou o numero em ${match} tentativas`)
