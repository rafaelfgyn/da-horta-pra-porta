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
            <Link to="https://da-horta-pra-porta-blush.vercel.app/Usuário/Início">Início</Link>
            <Link to="https://da-horta-pra-porta-blush.vercel.app/Usuário/Sobre">Sobre</Link>
            <Link to="https://da-horta-pra-porta-blush.vercel.app/Usuário/Produtos">Produtos</Link>
            <Link to="https://da-horta-pra-porta-blush.vercel.app/Usuário/Objetivos">Objetivos</Link>
            <Link to="https://da-horta-pra-porta-blush.vercel.app/Usuário/Contatos">Contatos</Link>
            <Link to="https://da-horta-pra-porta-blush.vercel.app/">Sair</Link>
          </ul>
        </header>
        <hr />
      </div>
    </div>
  )
}

export default Menu