import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "../screens/HomeScreen"
import ProdutoScreen from "../screens/ProdutosScreen"
import ContatoScreen from "../screens/ContatoScreen"
import { Container } from "react-bootstrap"

export default function RootNavigation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/produto" element={<ProdutoScreen />} />
                <Route path="/contato" element={<ContatoScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

function error() {
    return (
        <Container>
            <h1>Error 404</h1>
            <p>Página não encontrada!</p>
        </Container>
    )
}