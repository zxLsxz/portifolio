import { useState } from 'react'
import Button from '../Button/Button.jsx'
import CardProjeto from '../CardProjeto/CardProjeto.jsx'
import FiltroTecnologias from '../FiltroTecnologias/FiltroTecnologias.jsx'
import Icone from '../Icons/Icone.jsx'

function ListaProjetos({ projetos }) {
  const [tecnologia, setTecnologia] = useState('Todas')
  const [busca, setBusca] = useState('')
  const tecnologias = [
    ...new Set(projetos.flatMap((projeto) => projeto.tecnologias)),
  ]

  const filtrados = projetos.filter((projeto) => {
    const passaNoFiltro =
      tecnologia === 'Todas' || projeto.tecnologias.includes(tecnologia)
    const passaNaBusca = projeto.titulo
      .toLowerCase()
      .includes(busca.toLowerCase())
    return passaNoFiltro && passaNaBusca
  })

  function limparFiltros() {
    setTecnologia('Todas')
    setBusca('')
  }

  return (
    <>
      <div className="cartao painel-filtros">
        <div className="campo-busca">
          <label htmlFor="busca">buscar pelo nome</label>
          <div className="campo-busca__caixa">
            <Icone nome="busca" />
            <input
              id="busca"
              type="search"
              placeholder="ex.: lista"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>
        </div>
        <FiltroTecnologias
          tecnologias={tecnologias}
          selecionada={tecnologia}
          onSelecionar={setTecnologia}
        />
      </div>

      <p className="resumo-lista">
        <span>
          <strong>{filtrados.length}</strong> de {projetos.length} projetos
        </span>
      </p>

      {filtrados.length === 0 ? (
        <div className="vazio">
          <p className="vazio__titulo">Nenhum projeto encontrado</p>
          <p>Tente outra palavra ou outra tecnologia.</p>
          <Button variante="contorno" onClick={limparFiltros}>
            limpar filtros
          </Button>
        </div>
      ) : (
        <div className="grade-cartoes">
          {filtrados.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListaProjetos