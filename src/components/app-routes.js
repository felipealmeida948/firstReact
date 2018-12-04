import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Importar elementos
import Colors from './elements/colors'
import Grid from './elements/grid'
import Buttons from './elements/buttons'
import Inputs from './elements/Inputs'
import Radio from './elements/radio'
import Check from './elements/check'
import Tooltip from './elements/tooltip'
import Tags from './elements/tags'
import Alert from './elements/alert'
import Carousel from './elements/carousel'
import Breadcrumb from './elements/breadcrumb'
import Table from './elements/table'
import Modal from './elements/modal'
import Tabs from './elements/tabs'
import Collapse from './elements/collapse'
import Icons from './elements/icons'
import Typography from './elements/typography'
import Paragraph from './elements/paragraph'

const AppRoute = () => (
  <Switch>
    <Route path='/colors' component={Colors} />
    <Route path='/grid' component={Grid} />
    <Route path='/buttons' component={Buttons} />
    <Route path='/inputs' component={Inputs} />
    <Route path='/radio' component={Radio} />
    <Route path='/check' component={Check} />
    <Route path='/tooltip' component={Tooltip} />
    <Route path='/tags' component={Tags} />
    <Route path='/alert' component={Alert} />
    <Route path='/carousel' component={Carousel} />
    <Route path='/inputs' component={Inputs} />
    <Route path='/breadcrumb' component={Breadcrumb} />
    <Route path='/table' component={Table} />
    <Route path='/modal' component={Modal} />
    <Route path='/tabs' component={Tabs} />
    <Route path='/collapse' component={Collapse} />
    <Route path='/icons' component={Icons} />
    <Route path='/typography' component={Typography} />
    <Route path='/paragraph' component={Paragraph} />
  </Switch>
)

export default AppRoute
