import React from 'react'

import database from '../database.json'

import background from '../images/background.png'

import Logo from '../images/logo.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'

const Login = props => {

  (function changeBackground() {

    document.body.style.backgroundImage = `url("${background}")`;
    }())

  const notifyWarn = msg => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  function login() {

    let email = document.querySelector('[name=Email]').value
    let password = document.querySelector('[name=Senha]').value

    if (!email) { return notifyWarn('Email não informado.') };
    if (!password) { return notifyWarn('Senha não informada') };

    let user = database.find(user => user.email === email)

    if (!user) { return notifyWarn('Email não encontrado') }

    if (user.password !== password) { return notifyWarn('Dados Incorretos') }

    window.location.href = "http://localhost:3000/Usuário/Início"
  }

  return (
    <div className="content">
      <div className="logo">
        <img src={Logo} alt="" />
        <h4>A natureza fornece, nós aperfeiçoamos e entregamos. Com frescor, sabor, e varidade em hortifruti para todos os gostos e paladares: é o que garantimos.</h4>
      </div>
      <div className="main">
        <form action="">
          <h3>Seja Bem Vindo!</h3>
          <input type="text" name="Email" placeholder='Email' /><br />
          <input type="text" name='Senha' placeholder='Senha' /><br />
          <Link to="/redefinir-senha">Esqueceu sua senha?</Link>
          <button onClick={e => { e.preventDefault(); login() }}>Entrar</button>
          <Link to="/cadastro">Cadastrar</Link>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnBottom
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
    </div>
  )
}

export default Login