// estrutur de repetição
//for
//break - para a execução do loop
//continue - pula a execução do momento

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue //vai pular o console.log do 5
  }
  console.log(i)
}

//while
//usar o while quando não souber o momento da parada do loop
let i = 3516416516
while (i > 10) {
  console.log(i)
  i /= 35
}

//for...of
//para arrays
let name = 'Pam'
let names = ['maria', 'pedro', 'ana']

for (let char of name) {
  console.log(char)
}

//for..input
//para objetos

let person = {
  name: 'Emma',
  age: 31,
  weight: 60
}

for (let property in person) {
  console.log(`${property}: ${person[property]}`)
}
