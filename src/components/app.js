import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

import AppRoutes from './app-routes'
import Menu from './layout/menu'
import Sidebar from './layout/sidebar'

class App extends Component {
  render () {
    return (

      <div className='content'>
        <Menu />
        <div className='container'>
          <div className='main-container'>
            <Sidebar />
            <div className='content-container'>
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App
