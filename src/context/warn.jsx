// libs
import React, { useContext } from 'react'

const WarnContext = React.createContext()

export function useWarn() {
  const context = useContext(WarnContext)

  if (context === undefined) {
    throw new Error('useWarn must be used within a WarnContext.Provider')
  }

  const { status, lost, prevent, reset } = context

  return { status, lost, prevent, reset }
}

export default WarnContext
