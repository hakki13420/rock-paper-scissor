import React from 'react'

const WinnerEffect = () => {
  return (
    <>
      <div style={{ animationDelay: '-3s' }} className='absolute xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 rounded-full flex justify-center items-center bg-winnerColor animate-wave' />
      <div style={{ animationDelay: '-2s' }} className='absolute xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 rounded-full flex justify-center items-center bg-winnerColor animate-wave' />
      <div style={{ animationDelay: '-1s' }} className='absolute xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 rounded-full flex justify-center items-center bg-winnerColor animate-wave' />
      <div style={{ animationDelay: '0s' }} className='absolute xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 rounded-full flex justify-center items-center bg-winnerColor animate-wave' />
    </>
  )
}

export default WinnerEffect
