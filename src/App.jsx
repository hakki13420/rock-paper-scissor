import React from 'react'

import './App.css'
import Score from './components/Score'
import TriangleGame from './components/TriangleGame'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import StepOne from './pages/StepOne'
import TriangleGameItem from './components/TriangleGameitem'
import StepTwo from './pages/StepTwo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/step1',
    element: <StepOne />
  },
  {
    path: '/step2',
    element: <StepTwo />
  }
])

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
