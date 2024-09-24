import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sound.js'
import * as el from './elements.js'

export function play() {
  state.isRunning = true
  document.documentElement.classList.add('running')
  timer.countdown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function reset() {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function increase() {
  state.minutes = state.minutes + 5
  timer.updateDisplay()
}

export function decrease() {
  if (state.minutes <= 0) {
    return
  }
  state.minutes = state.minutes - 5
  timer.updateDisplay()
}

export function toggleMusic(title) {
  const cards = Array.from(el.cards)

  //musica atual
  let musicOn = Array.from(cards).find(card => card.id == title)
  console.log(musicOn)

  if (state.isMute) {
    sounds[title].play()
    musicOn.classList.add('active')
    state.isMute = false
    return
  } else {
    musicOn.classList.remove('active')
    console.log(state.isMute)

    sounds[title].pause()
    state.isMute = true

  }
}
