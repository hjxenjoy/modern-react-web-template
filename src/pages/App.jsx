// libs
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// routes
import getRoutes from '../routes'

// components
import Layout from '../layout'
import { useEnv } from '../context'
import WarnContext from '../context/warn'

function useWarn() {
  const [status, setStatus] = useState()

  function lost() {
    setStatus(404)
  }

  function prevent() {
    setStatus(403)
  }

  return [status, lost, prevent]
}

function App() {
  const { projectPrefix } = useEnv()
  const [status, lost, prevent] = useWarn()

  return (
    <WarnContext.Provider value={{ status, lost, prevent }}>
      <Router>
        <Layout>{renderRoutes(getRoutes(projectPrefix))}</Layout>
      </Router>
    </WarnContext.Provider>
  )
}

export default App
