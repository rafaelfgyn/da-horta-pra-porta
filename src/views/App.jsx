import React from 'react'

import Menu from '../components/Menu'
import Login from '../components/Login'
import Password from '../components/Password'
import Registration from '../components/Registration'
import User from '../components/User'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = props => {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
        </Switch>

        <Switch>
          <Route path="/redefinir-senha">
            <Password></Password>
          </Route>
        </Switch>

        <Switch>
          <Route path="/cadastro">
            <Registration></Registration>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Usuário/*">
            <Menu></Menu>
            <User></User>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App