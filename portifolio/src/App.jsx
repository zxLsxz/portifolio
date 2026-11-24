import {perfil} from './data/perfil.js'
import { coresDasTecnologias } from './data/tecnologias.js'
import { projetos } from './data/projetos.js'
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Footer from './components/Footer/Footer.jsx'
import Secao from './components/Secao/Secao.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import Card from './components/Card/Card.jsx'
import Badge from './components/Badge/Badge.jsx'
import CardProjeto from './components/CardProjeto/CardProjeto.jsx'

function App() {
  return (
    <>
    <main>
      <Hero
      nome={perfil.nome}
      cargo={perfil.cargo}
      resumo={perfil.resumo}
      cidade={perfil.cidade} />
        <Secao>
          <p className="etiqueta-secao">01 / sobre</p>
          <h2 className="secao__titulo">Quem sou eu</h2>
          <div className="sobre">
            <Perfil
              nome={perfil.nome}
              cidade={perfil.cidade}
              resumo={perfil.resumo}
            />
             <Card>
              <h3 className="rotulo">Habilidades</h3>
              <div className="lista-etiquetas lista-etiquetas--grande">
                {perfil.habilidades.map((habilidade) => (
                  <Badge
                    key={habilidade}
                    texto={habilidade}
                    cor={coresDasTecnologias[habilidade]}
                  />
                ))}
              </div>
            </Card>
          </div>
        </Secao>
        <Secao>
        <p className="etiqueta-secao">02 / projetos</p>
        <h2 className="secao__titulo">Projetos</h2>
        <div className="grade-cartoes">
          {projetos.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </div>
      </Secao>
        

    </main>
    <Footer nome={perfil.nome} email={perfil.email} />

    </>

  )

}

export default App
