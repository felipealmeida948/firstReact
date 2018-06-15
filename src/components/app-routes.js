import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Importar elementos
import Item1 from './elements/item1'
import Item2 from './elements/item2'

const AppRoute = () => (
  <Switch>
    <Route path='/item1' component={Item1} />
    <Route path='/item2' component={Item2} />
  </Switch>
)

export default AppRoute
