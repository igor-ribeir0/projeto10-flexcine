import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaFilmes from "./components/PaginaFilmes";
import PaginaSessoes from "./components/PaginaSessoes";
import PaginaAssentos from "./components/PaginaAssentos";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaFilmes />}/>
                <Route path="/sessoes/:idFilme" element={<PaginaSessoes />} />
                <Route path="/assentos/:idSessao" element={<PaginaAssentos />}/>
            </Routes>
        </BrowserRouter>
    );
}