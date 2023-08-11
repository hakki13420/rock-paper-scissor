import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userChoice } from '../slices/choiceSlice'
import { icons } from '../services/services'

const TriangleGameItem = ({ top, left, bottom, name }) => {
  const dispatch = useDispatch()
  const step = useSelector(state => state.choice.step)
  const navigate = useNavigate()

  console.log('step', step)
  const handlClick = (event) => {
    if (step === 0) {
      dispatch(userChoice(name))
      navigate('/step1')
    }
  }

  return (

    <div
      onClick={handlClick}
      data-name={name}
      className={`z-10 cursor-pointer flex justify-center items-center absolute ${top || ''} ${left || ''} ${left ? 'transform -translate-x-1/2' : ''} ${bottom || ''} rounded-full xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52`}
      style={{
        borderBottomWidth: '8px',
        borderBottomColor: icons[name]?.shadowColor,
        borderTopStyle: 'solid',
        backgroundColor: icons[name]?.ColorBg
      }}
    >
      <div
        data-name={name}
        className='flex justify-center items-center rounded-full bg-white xxs:w-20 xxs:h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32'
        style={{
          borderTopColor: '#e9e5e5',
          borderTopStyle: 'solid',
          borderTopWidth: '7px'
        }}
      >
        <img data-name={name} src={icons[name]?.icon} alt={name} className='xxs:w-16 xxs:h-16' />
      </div>
    </div>

  )
}

export default TriangleGameItem
