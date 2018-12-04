import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (

  <div class='menu-sidebar'>

    <h2 class='title'>Documentação</h2>
    <div class='menu-content'>
      <ul>
        <li> <Link to='/get-stared'>Get started</Link> </li>
        <li> <Link to='/introduction'>Introtudução</Link> </li>
        <li> <Link to='/use-componets'>Usando os componetes</Link> </li>
      </ul>
    </div> <br />

    <h2 class='title'>Componentes</h2>
    <div class='menu-content'>
      <ul>
        <li> <Link to='/colors'>Colors</Link> </li>
        <li> <Link to='/grid'>Grid</Link> </li>
        <li> <Link to='/buttons'>Buttons</Link> </li>
        <li> <Link to='/inputs'>Inputs</Link> </li>
        <li> <Link to='/radio'>Radio</Link> </li>
        <li> <Link to='/check'>Check</Link> </li>
        <li> <Link to='/tooltip'>Tooltip</Link> </li>
        <li> <Link to='/tags'>Tags</Link> </li>
        <li> <Link to='/alert'>Alerts</Link> </li>
        <li> <Link to='/carousel'>Carousel</Link> </li>
        <li> <Link to='/breadcrumb'>Breadcrumb</Link> </li>
        <li> <Link to='/table'>Table</Link> </li>
        <li> <Link to='/modal'>Modal</Link> </li>
        <li> <Link to='/tabs'>Tabs</Link> </li>
        <li> <Link to='/collapse'>Collapse</Link> </li>
        <li> <Link to='/icons'>Icons</Link> </li>
        <li> <Link to='/typography'>Typography</Link> </li>
        <li> <Link to='/paragraph'>Paragraph</Link> </li>
      </ul>
    </div>

  </div>

)

export default Sidebar
