import React from 'react'
import { useSelector } from 'react-redux'

const Score = () => {
  const score = useSelector(state => state.score)

  return (
    <div className=' w-full flex justify-between items-center p-3 border-4 border-[var(--HeaderOutline)] rounded-lg'>
      <div className='flex flex-col text-white font-bold xs:text-lg sm:text-3xl uppercase'>
        <span>Rock</span>
        <span>Papers</span>
        <span>Scissors</span>
      </div>
      <div className=' bg-gray-100 rounded-lg xxs:px-4  sm:px-8 py-2 grid place-items-center'>
        <span className='text-blue-600 font-bold uppercase xxs:text-sm xs:text-lg'>Score</span>
        <span className='text-gray-500 font-bold xs:text-2xl sm:text-5xl'>{score.score}</span>
      </div>
    </div>
  )
}

export default Score
