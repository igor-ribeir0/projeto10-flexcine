import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import PaginaFilmes from "./components/PaginaFilmes";
import PaginaSessoes from "./components/PaginaSessoes";
import PaginaAssentos from "./components/PaginaAssentos";
import PaginaSucesso from "./components/PaginaSucesso";

export default function App(){
    const [nomeFilme, setNomeFilme] = useState("");
    const [dataFilme, setDataFilme] = useState("");
    const [tempoFilme, setTempoFilme] = useState("");
    const [assentosLista, setAssentosLista] = useState([]);
    const [guardarCpf, setGuardarCpf] = useState("");
    const [guardarNome, setGuardarNome] = useState("");
    const [guardarRodapeImagem, setGuardarRodapeImagem] = useState("");

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PaginaFilmes 
                        setNomeFilme={setNomeFilme}
                        setGuardarRodapeImagem={setGuardarRodapeImagem}
                    />} 
                />

                <Route path="/sessoes/:idFilme" element={
                    <PaginaSessoes 
                        setDataFilme={setDataFilme}
                        setTempoFilme={setTempoFilme}
                        guardarRodapeImagem={guardarRodapeImagem}
                        nomeFilme={nomeFilme}
                    />} 
                />

                <Route path="/assentos/:idSessao" element={
                    <PaginaAssentos 
                        setAssentosLista={setAssentosLista}
                        setGuardarCpf={setGuardarCpf}
                        setGuardarNome={setGuardarNome}
                    />} 
                />


                <Route path="/sucesso" element={
                    <PaginaSucesso 
                        nomeFilme={nomeFilme}
                        dataFilme={dataFilme}
                        tempoFilme={tempoFilme}
                        assentosLista={assentosLista}
                        guardarCpf={guardarCpf}
                        guardarNome={guardarNome}
                    />} 
                />
            </Routes>
        </BrowserRouter>
    );
}