import { controls, soundsButton } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function playMusic(){
  soundsButton.addEventListener('click', event => {
      const title = event.target.id
      actions.toggleMusic(title)
    })
  }