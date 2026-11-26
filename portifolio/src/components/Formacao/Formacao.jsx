import { useState } from 'react'
import ItemFormacao from '../ItemFormacao/ItemFormacao.jsx'

function Formacao({ itens }) {
  const [abertoId, setAbertoId] = useState(null)

  function alternar(id) {
    if (abertoId === id) {
      setAbertoId(null)
    } else {
      setAbertoId(id)
    }
  }

  return (
    <div className="cartao acordeao">
      {itens.map((item) => (
        <ItemFormacao
          key={item.id}
          curso={item.curso}
          local={item.local}
          descricao={item.descricao}
          aberto={abertoId === item.id}
          onAlternar={() => alternar(item.id)}
        />
      ))}
    </div>
  )
}

export default Formacao