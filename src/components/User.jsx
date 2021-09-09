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
          <Route path="https://da-horta-pra-porta-blush.vercel.app/Usuário/Início">
            <Inicio></Inicio>
          </Route>
        </Switch>

        <Switch>
          <Route path="https://da-horta-pra-porta-blush.vercel.app/Usuário/Sobre">
            <Sobre></Sobre>
          </Route>
        </Switch>

        <Switch>
          <Route path="https://da-horta-pra-porta-blush.vercel.app/Usuário/Produtos">
            <Produtos></Produtos>
          </Route>
        </Switch>

        <Switch>
          <Route path="https://da-horta-pra-porta-blush.vercel.app/Usuário/Objetivos">
            <Objetivos></Objetivos>
          </Route>
        </Switch>

        <Switch>
          <Route path="https://da-horta-pra-porta-blush.vercel.app/Usuário/Contatos">
            <Contatos></Contatos>
          </Route>
        </Switch>
    </div>
  )
}

export default User