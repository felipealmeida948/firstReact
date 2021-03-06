import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'

require('./assets/sass/style.scss')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
