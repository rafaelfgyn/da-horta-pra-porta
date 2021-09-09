import React from 'react'

import '../css/menu.css'
import Logo from '../images/logo.png'

import { Link } from 'react-router-dom'

const Menu = props => {

  return (
    <div className="header">
      <div className="menu">
        <header>
        <img src={Logo} alt="" style={{ position: "absolute", height: "75%", left: '10px' }}/>
          <ul>
            <Link to="/Usuário/Início">Início</Link>
            <Link to="/Usuário/Sobre">Sobre</Link>
            <Link to="/Usuário/Produtos">Produtos</Link>
            <Link to="/Usuário/Objetivos">Objetivos</Link>
            <Link to="/Usuário/Contatos">Contatos</Link>
            <Link to="/">Sair</Link>
          </ul>
        </header>
        <hr />
      </div>
    </div>
  )
}

export default Menu