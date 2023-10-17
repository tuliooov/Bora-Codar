'use client'
import './style.css'
import { useState } from 'react'

export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <main id="app">
      <div id="product-image">
        {!toggle && (
          <button id="btn-360" onClick={() => setToggle(!toggle)}>
            <img
              src="./02/360.svg"
              alt="clique nesse botao para animar o sofa"
            />
          </button>
        )}
        {toggle && (
          <button id="btn-close" onClick={() => setToggle(!toggle)}>
            <img src="./02/close.svg" alt="parar de animar o sofa" />
          </button>
        )}

        {!toggle && <img id="static" src="./02/sofa.jpg" alt="sofa" />}
        {toggle && <img id="animated" src="./02/sofa.gif" alt="sofa animado" />}
      </div>

      <div id="product-details">
        <h4>CÓDIGO: 42404</h4>
        <h1>Sofá Margot II - Rosé</h1>
        <p>R$ 4.000</p>
        <button>ADICIONAR À CESTA</button>
      </div>
    </main>
  )
}
