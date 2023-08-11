import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  houseChoice: '',
  userChoice: '',
  step: 0
}
const choices = ['rock', 'paper', 'scissors']

const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {
    userChoice (state, action) {
      return {
        ...state,
        userChoice: action.payload,
        step: state.step + 1
      }
    },
    houseChoice (state, action) {
      return {
        ...state,
        houseChoice: choices[Math.floor(Math.random() * choices.length)],
        step: state.step + 1
      }
    },
    resetGame (state, action) {
      return initialState
    }

  }
})

export const { userChoice, houseChoice, resetGame } = choiceSlice.actions
export default choiceSlice.reducer
