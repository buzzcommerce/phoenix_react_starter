// import '@emotion/core'

import 'phoenix_html'
import './socket'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

declare let module: any

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}
