import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaFilmes from "./components/PaginaFilmes";
import PaginaSessoes from "./components/PaginaSessoes";
import PaginaAssentos from "./components/PaginaAssentos";
import PaginaSucesso from "./components/PaginaSucesso";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaFilmes />} />
                <Route path="/sessoes/:idFilme" element={<PaginaSessoes />} />
                <Route path="/assentos/:idSessao" element={<PaginaAssentos />} />
                <Route path="/sucesso" element={<PaginaSucesso />} />
            </Routes>
        </BrowserRouter>
    );
}