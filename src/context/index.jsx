// libs
import React, { useContext, useEffect } from 'react'

const EnvContext = React.createContext()

export function useEnv() {
  const context = useContext(EnvContext)

  if (context === undefined) {
    throw new Error('useEnv must be used within a EnvContext.Provider')
  }

  return context
}

export default EnvContext

export function useTitle(title = '') {
  const context = useEnv()
  const { projectName = '' } = context
  useEffect(() => {
    document.title = `${title}${projectName ? ` | ${projectName}` : ''}`
  }, [title, projectName])
}
