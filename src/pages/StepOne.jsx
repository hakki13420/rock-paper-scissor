import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Score from '../components/Score'
import Choice from '../components/Choice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { houseChoice } from '../slices/choiceSlice'
import Rules from '../components/Rules'
import RulesShow from '../components/RulesShow'

const StepOne = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const state = useSelector(state => state.choice)
  const rules = useSelector(state => state.rules.RulesShow)

  useEffect(() => {
    if (!state.userChoice) navigate('/')
    const passToStep2 = () => {
      setTimeout(() => {
        dispatch(houseChoice())
      }, 500)

      setTimeout(() => {
        navigate('/step2')
      }, 1000)
    }
    state.userChoice && passToStep2()
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

export default StepOne
