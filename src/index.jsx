import React from 'react'
import ReactDOM from 'react-dom'

import App from './pages/App'
import EnvContext from './context'

ReactDOM.render(
  <EnvContext.Provider
    value={{
      projectName: '',
      projectPrefix: '',
    }}
  >
    <App />
  </EnvContext.Provider>,
  document.getElementById('root')
)
