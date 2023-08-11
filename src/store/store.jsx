import { configureStore } from '@reduxjs/toolkit'
import choiceReducer from '../slices/choiceSlice'
import scoreReducer from '../slices/scoreSlice'
import ruleReducer from '../slices/ruleSlice'

export const store = configureStore({
  reducer: {
    choice: choiceReducer,
    score: scoreReducer,
    rules: ruleReducer
  }
})
