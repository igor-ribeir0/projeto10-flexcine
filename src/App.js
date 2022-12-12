import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import PaginaFilmes from "./components/PaginaFilmes";
import PaginaSessoes from "./components/PaginaSessoes";
import PaginaAssentos from "./components/PaginaAssentos";
import PaginaSucesso from "./components/PaginaSucesso";

export default function App(){
    const [nomeFilme, setNomeFilme] = useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaFilmes setNomeFilme={setNomeFilme}/>} />
                <Route path="/sessoes/:idFilme" element={<PaginaSessoes />} />
                <Route path="/assentos/:idSessao" element={<PaginaAssentos />} />
                <Route path="/sucesso" element={<PaginaSucesso nomeFilme={nomeFilme}/>} />
            </Routes>
        </BrowserRouter>
    );
}