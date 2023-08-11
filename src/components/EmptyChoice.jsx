import React from 'react'

const EmptyChoice = ({ children }) => {
  return (
    <div className='relative rounded-full xxs:w-32 xxs:h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 bg-gray-500 border-2 border-gray-500'>
      {children}
    </div>
  )
}

export default EmptyChoice
