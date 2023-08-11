import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className=' h-screen w-screen py-8 flex justify-center items-center bg-gradient-to-r from-gradient-bg1 to-gradient-bg2 overflow-hidden '>
      <div className='flex flex-col justify-between items-center w-3/4 h-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
