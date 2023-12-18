import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "../screens/HomeScreen"
import ProdutoScreen from "../screens/ProdutosScreen"
import SobreScreen from "../screens/SobreScreen"
import LoginScreen from './../screens/LoginScreen';

export default function RootNavigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/produto" element={<ProdutoScreen />} />
                <Route path="/sobre" element={<SobreScreen />} />
                <Route path="/login" element={<LoginScreen />} />
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