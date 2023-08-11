import React from 'react'
import triangle from '../assets/images/bg-triangle.svg'
// import rock from '../assets/images/icon-rock.svg'
// import paper from '../assets/images/icon-paper.svg'
// import scissors from '../assets/images/icon-scissors.svg'
import { icons } from '../services/services'
import TriangleGameItem from './TriangleGameitem'

const TriangleGame = () => {
  return (
    <div className=' h-1/2 w-full relative'>
      <img src={triangle} alt='triangle-image' className=' mx-auto w-2/3 h-full' />
      <TriangleGameItem item={icons.rock.icon} widthF='w-40' heightF='h-40' width='w-32' height='h-32' bottom='-bottom-12' left='left-1/2' name='rock' />
      <TriangleGameItem item={icons.paper.icon} widthF='w-40' heightF='h-40' width='w-32' height='h-32' top='-top-12' left='left-[16%]' name='paper' />
      <TriangleGameItem item={icons.scissors.icon} widthF='w-40' heightF='h-40' width='w-32' height='h-32' top='-top-12' left='left-[82%]' name='scissors' />
    </div>
  )
}

export default TriangleGame
