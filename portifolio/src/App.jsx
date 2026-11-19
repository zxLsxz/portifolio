import {perfil} from './data/perfil.js'
// import Header from "./componentes/Header/Header.js"
import Hero from "./componentes/Hero/Hero.jsx"
function App() {
  return (

    <main>
      <Hero
      nome={perfil.nome}
      cargo={perfil.cargo}
      resumo={perfil.resumo}
      cidade={perfil.cidade} />

    </main>

  )

}

export default App
