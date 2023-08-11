import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  winner: ''
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    userWin (state, action) {
      return {
        ...state,
        score: state.score + 1,
        winner: 'user'
      }
    },
    userLost (state, action) {
      return {
        ...state,
        score: state.score - 1,
        winner: 'machine'
      }
    },
    equality (state, action) {
      return {
        ...state,
        winner: 'equal'
      }
    },
    resetNewGame (state, action) {
      return {
        ...state,
        winner: ''
      }
    }

  }

})

export const { userWin, userLost, equality, resetNewGame } = scoreSlice.actions
export default scoreSlice.reducer
