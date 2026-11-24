function Header({ usuario }) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho__linha">
        <a className="logo" href="#topo">
          ~/{usuario}
          <span>_</span>
        </a>
      </div>
    </header>
  )
}

export default Header