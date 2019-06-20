import React, { lazy, Suspense } from 'react'

import Loading from '../components/Loading'

const AsyncComponent = loader => {
  const TargetComponent = lazy(loader)
  return props => (
    <Suspense fallback={<Loading.LoadingPage />}>
      <TargetComponent {...props} />
    </Suspense>
  )
}

export default AsyncComponent
