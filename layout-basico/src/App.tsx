import Card from "./componentes/card/Card"
import Contador from "./componentes/contador/Contador"
import Home from "./componentes/home/Home"
import Login from "./componentes/login/Login"
import Tarefa from "./componentes/tarefa/Tarefa"

function App() {
    return (
        <>
            <Card titulo="React" descricao="Framework JS" />
            <Contador/>
            <Tarefa />
            <Home />
            <Login />
        </>
    )
}

export default App