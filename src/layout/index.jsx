// libs
import React from 'react'

// components
import { useWarn } from '../context/warn'

const NotFound = React.lazy(() => import('../pages/NotFound'))
const Forbidden = React.lazy(() => import('../pages/Forbidden'))

function Layout(props) {
  const { status } = useWarn()
  let content = props.children

  if (status === 403) {
    content = (
      <React.Suspense fallback={null}>
        <Forbidden />
      </React.Suspense>
    )
  } else if (status === 404) {
    content = (
      <React.Suspense fallback={null}>
        <NotFound />
      </React.Suspense>
    )
  }

  return content
}

export default Layout
