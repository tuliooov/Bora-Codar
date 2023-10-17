'use client'
import './style.css'
import { useState } from 'react'
import { CircleNotch } from '@phosphor-icons/react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const handleButton = () => setLoading(!loading)

  return (
    <main id="app">
      <h1>Teste os botões</h1>
      <p>
        Interaja com os botões e observe a mudança de aparência e de cursores
      </p>

      <div className="buttons">
        <button
          className={`primary ${loading ? 'loading' : ''}`}
          onClick={handleButton}
        >
          {loading && <CircleNotch size={18} />}
          interaja comigo
        </button>
        <button
          className={`secondary ${loading ? 'loading' : ''}`}
          onClick={handleButton}
        >
          {loading && <CircleNotch size={18} />}interaja comigo
        </button>
        <button
          className={`tertiary movable ${loading ? 'loading' : ''}`}
          onClick={handleButton}
        >
          {loading && <CircleNotch size={18} />}
          interaja comigo
        </button>
      </div>
    </main>
  )
}
