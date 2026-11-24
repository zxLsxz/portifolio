import { useState } from 'react'
import Button from '../Button/Button.jsx'

function Perfil({ nome, cidade, resumo, bio }) {
  const [aberto, setAberto] = useState(false)

  return (
    <article className="sobre__texto">
      <p>
        Oi, eu sou {nome}, de {cidade}. {resumo}
      </p>
      {aberto && <p>{bio}</p>}
      <Button variante="contorno" onClick={() => setAberto(!aberto)}>
        {aberto ? 'ler menos' : 'ler mais'}
      </Button>
    </article>
  )
}

export default Perfil