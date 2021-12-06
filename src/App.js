import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Convert from './Convert'
import Nav from './common/Nav'
import Home from './common/Home'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/convert">
          <Convert />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
