import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// PAGES
import Error404 from '../views/Error404'
import Cards from '../views/Cards'
import CardEdit from '../views/Cards/CardEdit'
import CardAdd from '../views/Cards/CardAdd'

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={ Cards } />
      <Route exact path="/cards" component={ Cards } />
      <Route exact path="/cards/add" component={ CardAdd } />
      <Route exact path="/cards/:id/edit" component={ CardEdit } />
      <Route exact path="/error404" component={ Error404 } />
      <Redirect to="/error404" />
    </Switch>
  )
}
