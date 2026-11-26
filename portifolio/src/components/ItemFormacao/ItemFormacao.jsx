import Icone from '../Icons/Icone.jsx'

function ItemFormacao({ curso, local, descricao, aberto, onAlternar }) {
  return (
    <div className="acordeao__item">
      <h3 className="acordeao__titulo">
        <button
          type="button"
          className="acordeao__botao"
          aria-expanded={aberto}
          onClick={onAlternar}
        >
          {curso}
          <Icone nome="chevron" />
        </button>
      </h3>
      {aberto && (
        <div className="acordeao__conteudo">
          <p className="acordeao__local">{local}</p>
          <p>{descricao}</p>
        </div>
      )}
    </div>
  )
}

export default ItemFormacao