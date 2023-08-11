import React from 'react'
import rules from '../assets/images/image-rules.svg'
import close from '../assets/images/icon-close.svg'
import { useDispatch } from 'react-redux'
import { toggle } from '../slices/ruleSlice'

const RulesShow = () => {
  const dispatch = useDispatch()
  const closePop = () => {
    dispatch(toggle())
  }
  return (
    <div className='z-20 p-5 rounded-lg bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='mb-8 flex justify-between items-center'>
        <h1 className='uppercase text-xl font-bold text-gray-700'>Rules</h1>
        <img onClick={closePop} src={close} alt='close' className='cursor-pointer hover:scale-150' />
      </div>
      <img src={rules} alt='rules' />
    </div>
  )
}

export default RulesShow
