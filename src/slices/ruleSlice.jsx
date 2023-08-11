import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showRules: false
}
const ruleSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    toggle (state, action) {
      return {
        showRules: !state.showRules
      }
    }
  }
})

export const { toggle } = ruleSlice.actions
export default ruleSlice.reducer
