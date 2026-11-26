import { perfil } from './data/perfil.js'
import { projetos } from './data/projetos.js'
import { coresDasTecnologias } from './data/tecnologias.js'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'
import Secao from './components/Secao/Secao.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import Card from './components/Card/Card.jsx'
import Badge from './components/Badge/Badge.jsx'
import Icone from './components/Icons/Icone.jsx'
import Formacao from './components/Formacao/Formacao.jsx'
import ListaProjetos from './components/ListaProjetos/ListaProjetos.jsx'

function App() {
  return (
    <>
      <Header usuario={perfil.usuario} />
      <main>
        <Hero
          nome={perfil.nome}
          cargo={perfil.cargo}
          resumo={perfil.resumo}
          cidade={perfil.cidade}
        />

        <Secao id="sobre">
          <p className="etiqueta-secao">01 / sobre</p>
          <h2 className="secao__titulo">Quem sou eu</h2>
          <div className="sobre">
            <Perfil
              nome={perfil.nome}
              cidade={perfil.cidade}
              resumo={perfil.resumo}
              bio={perfil.bio}
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

        <Secao id="formacao" alternada>
          <p className="etiqueta-secao">02 / formação</p>
          <h2 className="secao__titulo">Onde estudei</h2>
          <Formacao itens={perfil.formacao} />
        </Secao>

        <Secao id="projetos">
          <p className="etiqueta-secao">03 / projetos</p>
          <h2 className="secao__titulo">Projetos</h2>
          <ListaProjetos projetos={projetos} />
        </Secao>

        <Secao id="contato">
          <div className="chamada">
            <div className="chamada__texto">
              <h2>
                Vamos <span>conversar?</span>
              </h2>
              <p>Estou em busca do primeiro estágio. Me mande uma mensagem!</p>
            </div>
            <a
              className="botao botao--primario"
              href={`mailto:${perfil.email}`}
            >
              mandar e-mail <Icone nome="seta" tamanho={18} />
            </a>
          </div>
        </Secao>
      </main>
      <Footer nome={perfil.nome} email={perfil.email} />
    </>
  )
}

export default App