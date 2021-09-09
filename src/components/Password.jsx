import React from 'react'

import { Link } from 'react-router-dom'

import database from '../database.json'

import Logo from '../images/logo.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Password = props => {

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

  const notifySuccess = () => {
    toast.success('Usuário cadastrado com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  function newPassword() {

    let email = document.querySelector('[name=Email]').value
    let password = document.querySelector('[name=Senha]').value
    let confirmPassword = document.querySelector('[name=Confirmação]').value

    if (!email) { return notifyWarn('Email não informado.') };
    if (!password) { return notifyWarn('Senha não informada') };
    if (!confirmPassword) { return notifyWarn('Confirmação de senha não informada.') };
    if (password !== confirmPassword) { return notifyWarn('Senhas não conferem.') };

    let userExists = database.find(user => user.email === email)

    if (!userExists) { return notifyWarn('Email não encontrado') }

    notifySuccess('Senha criada com sucesso!')

    document.querySelector('.main form').reset()
  }

  return (

    <div className="content">
      <div className="logo">
        <img src={Logo} alt="" />
        <h4>A natureza fornece, nós aperfeiçoamos e entregamos. Com frescor, sabor, e varidade em hortifruti para todos os gostos e paladares: é o que garantimos.</h4>
      </div>
      <div className="main">
        <form action="">
          <h3>Redefinir Senha</h3>
          <input type="text" name="Email" placeholder='Email' /><br />
          <input type="text" name="Senha" placeholder='Senha' /><br />
          <input type="text" name="Confirmação" placeholder='Confirmação de Senha' /><br />
          <Link to="/">Login</Link>
          <button onClick={e => { e.preventDefault(); newPassword() }}>Redefinir Senha</button>
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

export default Password