// libs
import React from 'react'

// components
import { useTitle } from '../../context'

function Home() {
  useTitle('Home')
  return (
    <React.Fragment>
      <h1>Home Page.</h1>
    </React.Fragment>
  )
}

export default Home
