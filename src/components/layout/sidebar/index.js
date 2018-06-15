import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (

  <div class='menu-sidebar'>
    <h2 class='title'>Documentação</h2>

    <div class='menu-content'>
      <ul>
        <li> <Link to='/item1'>Item 1</Link> </li>
        <li> <Link to='/item2'>Item 2</Link> </li>
      </ul>

    </div>

  </div>

)

export default Sidebar
