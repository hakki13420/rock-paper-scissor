import React, { lazy, Suspense } from 'react'
import Layout from '../components/Layout'
import Score from '../components/Score'
import Rules from '../components/Rules'
import RulesShow from '../components/RulesShow'
import { useSelector } from 'react-redux'

const TriangleGame = lazy(() => import('../components/TriangleGame'))

const Home = () => {
  const rules = useSelector(state => state.rules.showRules)
  return (
    <Layout>
      <Score />
      <Suspense fallback='loading'>
        <TriangleGame />
      </Suspense>
      <Rules />
      {rules && <RulesShow />}
    </Layout>
  )
}

export default Home
