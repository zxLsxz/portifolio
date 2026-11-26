import { useState } from 'react'
import Icone from '../Icons/Icone.jsx'

function Header({ usuario }) {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="cabecalho">
      <div className="container cabecalho__linha">
        <a className="logo" href="#topo">
          ~/{usuario}
          <span>_</span>
        </a>

        <button
          type="button"
          className="menu-botao"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icone nome={menuAberto ? 'fechar' : 'menu'} />
        </button>

        <nav className={menuAberto ? 'menu menu--aberto' : 'menu'}>
          <a className="menu__link" href="#sobre" onClick={fecharMenu}>
            sobre
          </a>
          <a className="menu__link" href="#projetos" onClick={fecharMenu}>
            projetos
          </a>
          <a className="menu__link" href="#contato" onClick={fecharMenu}>
            contato
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header