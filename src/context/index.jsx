// libs
import React, { useContext } from 'react'

const EnvContext = React.createContext()

export function useEnv() {
  const context = useContext(EnvContext)

  if (context === undefined) {
    throw new Error('useEnv must be used within a EnvContext.Provider')
  }

  return context
}

export default EnvContext
