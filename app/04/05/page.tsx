'use client'
import './style.css'

export default function Home() {
  return (
    <div id="app">
      <div id="calculator">
        <div id="display">
          <div id="last-calc">1 + 1</div>
          <div id="result">
            <img src="./05/equals.svg" alt="sinal de igual" />
            <span>2</span>
          </div>
        </div>
        <div id="keyboard">
          <button className="secondary">CE</button>
          <button>C</button>
          <button>
            <img src="./05/percent.svg" alt="Percent" />
          </button>
          <button className="tertiary">
            <img src="./05/divide.svg" alt="Divide" />
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="tertiary">
            <img src="./05/x.svg" alt="Multiplication" />
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="tertiary">
            <img src="./05/minus.svg" alt="Minus" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="tertiary">
            <img src="./05/plus.svg" alt="Plus" />
          </button>
          <button>
            <img src="./05/plusminus.svg" alt="PlusMinus" />
          </button>
          <button>0</button>
          <button>,</button>
          <button className="quartiary">
            <img src="./05/result.svg" alt="Equals" />
          </button>
        </div>
      </div>
    </div>
  )
}
