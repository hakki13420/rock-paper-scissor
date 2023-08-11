import React from 'react'
import TriangleGameItem from './TriangleGameitem'

import EmptyChoice from './EmptyChoice'
import WinnerEffect from './WinnerEffect'
import { useSelector } from 'react-redux'
import Result from './Result'

const Choice = () => {
  const choice = useSelector(state => state.choice)
  const score = useSelector(state => state.score)

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full h-full justify-center items-center'>

        <div className='flex-1 flex xxs:flex-col-reverse sm:flex-col items-center xxs:gap-4 sm:gap-20 '>
          <h1 className=' z-20 uppercase text-white xs:text-sm xs:mt-12 sm:text-2xl'>
            you picked
          </h1>
          <div className='relative flex justify-center h-full w-full'>

            <EmptyChoice width='w-52' height='h-52'>
              <TriangleGameItem widthF='w-52' heightF='h-52' width='w-32' height='h-32' name={choice.userChoice} />
            </EmptyChoice>
            {score.winner === 'user' && <WinnerEffect />}
          </div>
        </div>

        <div className=' xxs:hidden md:flex'>
          {
          score.winner && <Result />
          }
        </div>

        <div className='flex-1 flex xxs:flex-col-reverse sm:flex-col items-center xxs:gap-4 sm:gap-20'>
          <h1 className=' z-20 uppercase text-white xs:text-sm  xs:mt-12 sm:text-2xl'>
            The house picked
          </h1>
          <div className='relative flex justify-center h-full w-full'>
            <EmptyChoice width='w-52' height='h-52'>
              {
              choice.step > 1 && <TriangleGameItem widthF='w-52' heightF='h-52' width='w-32' height='h-32' name={choice.houseChoice} />
            }
            </EmptyChoice>
            {score.winner === 'machine' && <WinnerEffect />}
          </div>
        </div>
      </div>
      <div className='xxs:flex xxs:mt-16 md:hidden'>
        {
          score.winner && <Result />
          }
      </div>
    </div>
  )
}

export default Choice
