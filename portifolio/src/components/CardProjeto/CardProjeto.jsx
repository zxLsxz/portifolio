import Card from '../Card/Card.jsx'
import Badge from '../Badge/Badge.jsx'
import Button from '../Button/Button.jsx'
import { coresDasTecnologias } from '../../data/tecnologias.js'

function CardProjeto({ titulo, descricao, tecnologias = [] }) {
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
      </div>
    </Card>
  )
}

export default CardProjeto