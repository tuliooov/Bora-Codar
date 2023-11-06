'use client'
import { useState } from 'react'
import './style.css'

export default function Home() {
  const [hide, setHide] = useState(true)
  function togglePassword() {
    setHide(!hide)
  }

  return (
    <div id="page" className="flex">
      <div>
        <header>
          <img src="./11/logo.svg" alt="" />
        </header>
        <main>
          <div className="headline">
            <h1>Acesse a plataforma</h1>
            <p>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
          </div>
          <form>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha"> Senha </label>
                <a href="#"> Esqueceu a senha? </a>
              </div>

              <input
                type={hide ? 'password' : 'text'}
                id="senha"
                placeholder="Digite sua senha"
              />

              <img
                onClick={togglePassword}
                className="eye"
                src="./11/eye-off.svg"
                alt=""
              />
              <img
                onClick={togglePassword}
                className="eye hide"
                src="./11/eye.svg"
                alt=""
              />
            </div>

            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta?
              <a href="#"> Inscreva-se </a>
            </div>
          </form>
        </main>
      </div>
      <img src="./11/bg.jpg" alt="" />
    </div>
  )
}
