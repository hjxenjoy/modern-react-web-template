// libs
import React from 'react'

// components
import Head from '../../layout/Head'
import { useWarn } from '../../context/warn'

function Home() {
  const { prevent } = useWarn()

  setTimeout(() => {
    prevent()
  }, 2000)

  return (
    <React.Fragment>
      <Head title="Home" />
      <h1>Home Page.</h1>
    </React.Fragment>
  )
}

export default Home
