function Footer({ nome, email }) {
  return (
    <footer className="rodape">
      <div className="container rodape__linha">
        <span>
          © 2026 {nome} · {email}
        </span>
        <span>feito com React · Residência em TIC 19</span>
      </div>
    </footer>
  )
}

export default Footer

