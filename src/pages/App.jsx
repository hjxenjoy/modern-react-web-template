// libs
import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// routes
import getRoutes from '../routes'

// components
import Layout from '../layout'
import { useEnv } from '../context'
import WarnContext from '../context/warn'

function useWarnStatus() {
  const [status, setStatus] = useState()

  const lost = useCallback(function lost() {
    setStatus(404)
  }, [])

  const prevent = useCallback(function prevent() {
    setStatus(403)
  }, [])

  const reset = useCallback(function reset() {
    setStatus()
  }, [])

  return [status, lost, prevent, reset]
}

function App() {
  const { projectPrefix } = useEnv()
  const [status, lost, prevent, reset] = useWarnStatus()

  return (
    <WarnContext.Provider value={{ status, lost, prevent, reset }}>
      <Router>
        <Layout>{renderRoutes(getRoutes(projectPrefix))}</Layout>
      </Router>
    </WarnContext.Provider>
  )
}

export default App
