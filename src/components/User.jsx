import React from 'react'

import Inicio from './Inicio'
import Sobre from './Sobre'
import Produtos from './Produtos'
import Objetivos from './Objetivos'
import Contatos from './Contatos'

import backgroundHome from '../images/home.png'

import { Route, Switch } from 'react-router-dom'

const User = props => {

  (function changeBackground() {

  document.body.style.backgroundImage = `url("${backgroundHome}")`;
  }())

  return (
    <div className="user">
        <Switch>
          <Route path="/Usuário/Início">
            <Inicio></Inicio>
          </Route>

          <Route path="/Usuário/Sobre">
            <Sobre></Sobre>
          </Route>

          <Route path="/Usuário/Produtos">
            <Produtos></Produtos>
          </Route>

          <Route path="/Usuário/Objetivos">
            <Objetivos></Objetivos>
          </Route>

          <Route path="/Usuário/Contatos">
            <Contatos></Contatos>
          </Route>
        </Switch>
    </div>
  )
}

export default User