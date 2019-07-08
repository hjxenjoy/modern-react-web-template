// libs
import React, { useEffect } from 'react'
import { withRouter } from 'react-router'

// components
import { useWarn } from '../context/warn'

const NotFound = React.lazy(() => import('../pages/NotFound'))
const Forbidden = React.lazy(() => import('../pages/Forbidden'))

function Layout(props) {
  const { status, reset } = useWarn()
  let content = props.children

  useEffect(() => {
    reset()
  }, [props.location.pathname, reset])

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

export default withRouter(Layout)
