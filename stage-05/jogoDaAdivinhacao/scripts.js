let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn-2')
const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')
let guess = document.querySelector('#try')
const random = Math.floor(Math.random() * 10)
let tries = 1

function guessTheNumber() {
  if (random == guess.value) {
    console.log('acertou!')
    toggleScreen()
    document.querySelector('span').textContent = tries
  } else {
    tries++
    guess.value = ''
  }
  return tries
}

function resetGame() {
  toggleScreen()
  guess.value = ''
  tries = 1
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

document.addEventListener('keydown', guessTheNumber) //keydown na pagina, não no btn como estava sendo feito
btn2.addEventListener('click', resetGame)
