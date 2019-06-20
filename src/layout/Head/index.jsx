// libs
import React from 'react'
import { Helmet } from 'react-helmet'

// context
import { useEnv } from '../../context'

function Head({ title }) {
  const context = useEnv()
  const { projectName = '' } = context
  return <Helmet title={`${title}${projectName ? ` | ${projectName}` : ''}`} />
}

export default Head
