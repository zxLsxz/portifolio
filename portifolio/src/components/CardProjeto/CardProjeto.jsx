import { useState } from 'react'
import Card from '../Card/Card.jsx'
import Badge from '../Badge/Badge.jsx'
import Button from '../Button/Button.jsx'
import Icone from '../Icons/Icone.jsx'
import { coresDasTecnologias } from '../../data/tecnologias.js'

function CardProjeto({ titulo, descricao, tecnologias = [] }) {

   const [curtidas, setCurtidas] = useState(0)
 
  function curtir(){
    setCurtidas((atual) => atual + 1)
  }





  return (
    <Card>
      <h3>{titulo}</h3>
      <p className="cartao__descricao">{descricao}</p>
      <div className="lista-etiquetas">
        {tecnologias.map((tec) => (
          <Badge key={tec} texto={tec} cor={coresDasTecnologias[tec]} />
        ))}
      </div>
      <div className="cartao__rodape">
        <Button>Ver projeto</Button>
         <button
          type="button"
          className={curtidas > 0 ? 'curtir curtir--ativo' : 'curtir'}
          onClick={curtir}
          aria-label={`Curtir ${titulo}`}
        >
          <Icone nome="coracao" tamanho={18} />
          {curtidas}
        </button>
      </div>
    </Card>
  )
}

export default CardProjeto