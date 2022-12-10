import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaFilmes from "./components/PaginaFilmes";
import PaginaSessoes from "./components/PaginaSessoes";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaFilmes />}/>
                <Route path="/sessoes/:idFilme" element={<PaginaSessoes />} />
            </Routes>
        </BrowserRouter>
    );
}