import styled from "styled-components";
import Logo from "./Logo";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function PaginaAssentos(){
    const {idSessao} = useParams();
    const [listaAssentos, setListaAssentos] = useState([]);
    const [selecionados, setSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [validacao, setValidacao] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => {
            setListaAssentos(resposta.data);
        })

        promise.catch(error => {
            console.log(error.response.status);
        })
    }, []);

    if(listaAssentos.length === 0){
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
    }

    function SelecionarAssento(assento, restricao){
        const estaNaLista = selecionados.includes(assento);
        if(restricao === false){
            alert("Esse assento não está disponível");
        }
        else if(estaNaLista){
            const index = selecionados.indexOf(assento);
            const novoArray = [...selecionados];
            novoArray.splice(index, 1);
            setSelecionados(novoArray);
        }
        else{
            setSelecionados([...selecionados, assento]);
        }
    }

    function fazerReserva(event){
        event.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",{
            ids: [...selecionados],
            nome: nome,
            cpf: cpf
        });
        promise.then(() => navigate("/sucesso"));
        setValidacao(true);
    }

    if(validacao){
        setNome("");
        setCpf("");
    }

    return(
        <StyledPaginaAssentos>

            <StyledContainerConteudoAssentos>

                <Logo />

                <StyledDivH2><h2>Selecione o(s) assento(s)</h2></StyledDivH2>

                <StyledContainerAssentos>
                    <StyledAssentos>
                        {listaAssentos.seats.map((assento) =>
                        <StyledAssentosButton 
                            key={assento.id} 
                            isAvailable={assento.isAvailable}
                            onClick={() => SelecionarAssento(assento.id, assento.isAvailable)}
                            verificar={selecionados.includes(assento.id)}
                        >
                            {assento.name < 10? `0${assento.name}` : assento.name}
                        </StyledAssentosButton>)}
                    </StyledAssentos>

                    <StyledContainerLegenda>
                        <StyledLegenda>
                            <StyledSelecionadoButton />
                            <span>Selecionado</span>
                        </StyledLegenda>

                        <StyledLegenda>
                            <StyledDisponivelButton />
                            <span>Diponível</span>
                        </StyledLegenda>

                        <StyledLegenda>
                            <StyledIndisponivelButton />
                            <span>Indisponível</span>
                        </StyledLegenda>

                    </StyledContainerLegenda>

                </StyledContainerAssentos>

                <StyledContainerCadastro>
                    <form onSubmit={fazerReserva}>
                        <StyledDadosComprador>
                            <p>Nome do comprador:</p>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..." required/>
                        </StyledDadosComprador>

                        <StyledDadosComprador>
                            <p>CPF do comprador:</p>
                            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..." required/>

                            <StyledContainerReservar>
                                <StyledReservarButton type="submit">
                                    <span>Reservar assento(s)</span>
                                </StyledReservarButton>
                            </StyledContainerReservar>
                        </StyledDadosComprador>
                    </form>
                </StyledContainerCadastro>

            </StyledContainerConteudoAssentos>

        </StyledPaginaAssentos>
    );
}

const StyledPaginaAssentos = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #E5E5E5;
`

const StyledContainerConteudoAssentos = styled.div`
width: 375px;
display: flex;
flex-direction: column;
background-color: white;
`

const StyledDivH2 = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
    h2{
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
`

const StyledContainerAssentos = styled.div`
width: 100%;
justify-content: center;
align-items: center;
`

const StyledAssentos = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;
`

const StyledAssentosButton = styled.button`
width: 26px;
height: 26px;
border-radius: 12px;
border: 1px solid #808F9D;
background-color: ${props => props.verificar? "#1AAE9E" : props.isAvailable? "#C3CFD9" : "#FBE192"};
border: 1px solid ${props => props.verificar? "#0E7D71" : props.isAvailable? "#7B8B99" : "#F7C52B"};
margin: 5px;
&:hover{
    cursor: pointer;
}
`

const StyledContainerLegenda = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`

const StyledLegenda = styled.div`
width: 33%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    span{
        width: 91px;
        height: 28px;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
        margin-left: 25px;
    }
`

const StyledSelecionadoButton = styled.button`
width: 25px;
height: 25px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #1AAE9E;
margin-bottom: 5px;
`

const StyledDisponivelButton = styled.button`
width: 25px;
height: 25px;
border-radius: 17px;
border: 1px solid #7B8B99;
background-color: #C3CFD9;
margin-bottom: 5px;
margin-left: -10px;
`

const StyledIndisponivelButton = styled.button`
width: 25px;
height: 25px;
border-radius: 17px;
border: 1px solid #F7C52B;
background-color: #FBE192;
margin-bottom: 5px;
`

const StyledContainerCadastro = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
`

const StyledDadosComprador = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 10px;
    p{
        width: 327px;
        height: 25px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input{
        width: 327px;
        height: 51px;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        background-color: #FFFFFF;
    }
`

const StyledContainerReservar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 57px;
margin-bottom: 20px;
`

const StyledReservarButton = styled.button`
width: 225px;
height: 42px;
border-radius: 3px;
background-color: #E8833A;
&:hover{
    cursor: pointer;
}
    span{
        width: 225px;
        height: 42px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`