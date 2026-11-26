function FiltroTecnologias({ tecnologias, selecionada, onSelecionar }) {
  return (
    <div>
      <p className="filtros__titulo">tecnologia</p>
      <div className="filtros">
        <button
          type="button"
          className={
            selecionada === 'Todas' ? 'filtro filtro--ativo' : 'filtro'
          }
          aria-pressed={selecionada === 'Todas'}
          onClick={() => onSelecionar('Todas')}
        >
          Todas
        </button>
        {tecnologias.map((tec) => (
          <button
            key={tec}
            type="button"
            className={selecionada === tec ? 'filtro filtro--ativo' : 'filtro'}
            aria-pressed={selecionada === tec}
            onClick={() => onSelecionar(tec)}
          >
            {tec}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FiltroTecnologias