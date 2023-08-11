import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Score from '../components/Score'
import Choice from '../components/Choice'
import { useDispatch, useSelector } from 'react-redux'
import { getWinner } from '../services/services'
import { equality, userLost, userWin } from '../slices/scoreSlice'
import Rules from '../components/Rules'
import RulesShow from '../components/RulesShow'
import { useNavigate } from 'react-router-dom'

const StepTwo = () => {
  const dispatch = useDispatch()
  const choices = useSelector(state => state.choice)
  const rules = useSelector(state => state.rules.showRules)

  const navigate = useNavigate()

  useEffect(() => {
    if (!choices.userChoice) navigate('/')
    if (getWinner(choices.userChoice, choices.houseChoice) === 'user') {
      dispatch(userWin())
    } else if (getWinner(choices.userChoice, choices.houseChoice) === 'machine') {
      dispatch(userLost())
    } else {
      dispatch(equality())
    }
  }, [])

  return (
    <Layout>
      <Score />
      <Choice />
      <Rules />
      {rules && <RulesShow />}
    </Layout>
  )
}

export default StepTwo
