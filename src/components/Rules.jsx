import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../slices/ruleSlice'

const Rules = () => {
  const dispatch = useDispatch()

  const toggleShowRules = () => {
    dispatch(toggle())
  }
  return (
    <div className=' w-full flex xxs:justify-center sm:justify-end'>
      <button onClick={toggleShowRules} className='text-white text-lg font-bold uppercase border border-white rounded-lg bg-transparent px-10 py-2 hover:text-red-500'>Rules</button>
    </div>
  )
}

export default Rules
