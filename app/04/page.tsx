'use client'
import './style.css'

export default function Home() {
  return (
    <div id="app">
      <div id="top">
        <div id="user-info">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
          />

          <div id="user-status">
            <strong>Cecilia Sassaki</strong>
            <div className="status">Online</div>
          </div>
        </div>
        <div id="close-chat">
          <i className="ph-x-fill"></i>
        </div>
      </div>
      <div id="messages">
        <div id="last-seen">Hoje 11:30</div>

        <div className="messages">
          <div className="message">
            <div className="top">Cecilia - 11:30</div>
            <div className="body">
              Tive uma ideia incrível para um projeto! 😍
            </div>
          </div>
          <div className="message you">
            <div className="top">Você - 11:32</div>
            <div className="body">Sério? Me conta mais.</div>
          </div>
          <div className="message">
            <div className="top">Cecilia - 11:34</div>
            <div className="body">
              E se a gente fizesse um chat moderno e responsivo em apenas uma
              semana?
            </div>
          </div>
          <div className="message you">
            <div className="top">Você - 11:36</div>
            <div className="body">
              <strong>#boraCodar! 🚀</strong>
            </div>
          </div>
        </div>
      </div>
      <form id="bottom">
        <input type="text" placeholder="Digite sua mensagem" />
        <button>
          <i className="ph-paper-plane-right-fill"></i>
        </button>
      </form>
    </div>
  )
}
