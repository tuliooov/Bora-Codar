'use client'
import './style.css'

export default function Home() {
  return (
    <form>
      <section id="credit-card">
        <div className="front"></div>
        <div className="back"></div>
      </section>
      <section className="inputs flex">
        <div className="input-wrapper">
          <label htmlFor="cc-number">Número do cartão</label>
          <input id="cc-number" type="text" placeholder="**** **** **** ****" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cc-holder">Nome do titular</label>
          <input
            id="cc-holder"
            type="text"
            placeholder="Nome como está no cartão"
            required
          />
          <div className="warning">
            <img src="./13/warning.svg" alt="ícone de alerta" />
            Nome do titular é obrigatório
          </div>
        </div>

        <div className="col-2 flex">
          <div className="input-wrapper">
            <label htmlFor="cc-validity">Validade</label>
            <input id="cc-validity" type="text" placeholder="mm/aa" />
          </div>

          <div className="input-wrapper">
            <label className="flex help" htmlFor="cc-cvv">
              CVV
              <img
                src="./13/question.svg"
                alt="ícone de ajuda"
                title="Esse número está, geralmente, nas costas do seu cartão"
              />
            </label>
            <input id="cc-cvv" type="text" placeholder="***" />
          </div>
        </div>
      </section>
      <section className="info-security flex">
        <img src="./13/shield-check.svg" alt="ícone de segurança" />
        Seus dados estão seguros
      </section>
      <button>Adicionar Cartão</button>
    </form>
  )
}
