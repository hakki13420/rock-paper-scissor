import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
import { houseChoice, userChoice } from '../slices/choiceSlice'

export const icons = {
  rock: {
    icon: rock,
    ColorBg: 'var(--RockGradient2)',
    shadowColor: 'var(--RockGradient1)'
  },
  paper: {
    icon: paper,
    ColorBg: 'var(--PaperGradient2)',
    shadowColor: 'var(--PaperGradient1)'
  },
  scissors: {
    icon: scissors,
    ColorBg: 'var(--ScissorsGradient2)',
    shadowColor: 'var(--ScissorsGradient1)'
  }

}

export const getWinner = (userChoice, houseChoice) => {
  if ((userChoice === 'rock' && houseChoice === 'scissors') ||
        (userChoice === 'paper' && houseChoice === 'rock') ||
        (userChoice === 'scissors' && houseChoice === 'paper')
  ) { return 'user' } else if ((userChoice === 'rock' && houseChoice === 'paper') ||
        (userChoice === 'paper' && houseChoice === 'scissors') ||
        (userChoice === 'scissors' && houseChoice === 'rock')
  ) { return 'machine' } else return 'equal'
}
