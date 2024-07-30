const biscoito = document.querySelector('img#biscoito')
const boxDefault = document.querySelector('section.closed')
const boxMessage = document.querySelector('section.opened')
const text = document.querySelector('.message')
const resetBtn = document.querySelector('button')

const messages = {
  1: "O sucesso virá para aqueles que trabalham com perseverança e paciência.",
  2: "Acredite no poder dos seus sonhos e siga em frente com determinação.",
  3: "Grandes desafios trazem grandes oportunidades. Esteja pronto para aproveitá-las.",
  4: "A sorte favorece os corajosos. Arrisque-se e veja o que o destino reserva para você.",
  5: "A felicidade está nas pequenas coisas. Valorize cada momento especial da sua vida.",
  6: "Sua criatividade e dedicação serão recompensadas em breve.",
  7: "Aprenda com o passado, viva o presente e prepare-se para um futuro brilhante.",
  8: "A paz interior é o verdadeiro tesouro. Cultive-a todos os dias.",
  9: "Seja gentil consigo mesmo e com os outros. Isso trará mais harmonia à sua vida.",
  10: "As melhores coisas da vida não têm preço. Aprecie cada experiência única que o destino lhe reserva.",
}

biscoito.addEventListener('click', changeBox)

function changeBox(){
  boxDefault.classList.add('hide')
  boxMessage.classList.remove('hide')

  openMessage()
}

function generateMessage(){
  const play = Math.floor(Math.random() * 10)
  let message = messages[play]
  return message 
}

function openMessage(){
  const textMessage = document.querySelector('.message p')
  textMessage.textContent = generateMessage()
}
  

function resetGame(){
  boxDefault.classList.remove('hide')
  boxMessage.classList.add('hide')
}
