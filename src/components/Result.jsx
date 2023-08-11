import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetGame } from '../slices/choiceSlice'
import { resetNewGame } from '../slices/scoreSlice'

const Result = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const winner = useSelector(state => state.score.winner)

  const newGame = () => {
    dispatch(resetGame())
    dispatch(resetNewGame())
    navigate('/')
  }
  return (
    <div className=' z-20 flex-1 flex flex-col justify-center items-center'>
      <p className=' uppercase text-white xxs:text-5xl md:text-2xl lg:text-5xl'>
        {
        winner === 'user'
          ? 'you win'
          : winner === 'machine'
            ? 'you lose'
            : 'equality'
        }
      </p>
      <button onClick={newGame} className=' cursor-pointer uppercase rounded-lg mt-4 px-8 py-2 text-gray-600 bg-slate-100 hover:text-red-500 xxs:w-4/5'>play again</button>
    </div>
  )
}

export default Result
