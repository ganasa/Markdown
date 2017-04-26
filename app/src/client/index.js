import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Navbar from './components/navbar.js'
import Field from './components/field.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Navbar}>
      <Route path='/' component={Field} />
    </Route>
  </Router>
  , document.getElementById('main')
)
