import { Lista1 } from "./Componentes/Lista1"
import { Lista2 } from "./Componentes/Lista2"
import { Lista3 } from "./Componentes/Lista3"
import { Lista4 } from "./Componentes/Lista4"
import { Header } from "./Componentes/Header"


function App() {

  return (
    <div className="App">
        <main>
          <Header></Header>
          <Lista1></Lista1>
          <Lista2></Lista2>
          <Lista3></Lista3>
          <Lista4></Lista4>
        </main>
    </div>
  )
}

export default App
