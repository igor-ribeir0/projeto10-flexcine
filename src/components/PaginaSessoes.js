import styled from "styled-components";
import Logo from "./Logo";
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

export default function PaginaSessoes(props){
    const [listaSessoes, setListaSessoes] = useState([]);
    const {idFilme} = useParams();
    const {setTempoFilme, setDataFilme, guardarRodapeImagem, nomeFilme} = props;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then(resposta => {
            setListaSessoes(resposta.data);
        })

        promise.catch(error => {
            console.log(error.response.status);
        })
    }, []);

    if(listaSessoes.length === 0){
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
    }

    function guardarData(tempo, data){
        setTempoFilme(tempo);
        setDataFilme(data);
    }

    return(
        <StyledPaginaSessoes>

            <StyledContainerConteudoSessoes>

                <Logo />

                <StyledDivH2>
                    Selecione o horário
                </StyledDivH2>

                <StyledContainerSessoes>
                    {listaSessoes.days.map((sessao) => 
                    <StyledSessao key={sessao.id}>
                        <h3>{sessao.weekday}- {sessao.date}</h3>
                        {sessao.showtimes.map((tempo) => 
                        <Link to={`/assentos/${tempo.id}`} key={tempo.id}>
                            <StyledButton>
                                <span onClick={() => guardarData(tempo.name, sessao.date)}>{tempo.name}</span>
                            </StyledButton>
                        </Link>)}
                    </StyledSessao>)}
                </StyledContainerSessoes>

            </StyledContainerConteudoSessoes>

            <StyledRodape>
                <div>
                    <img src={guardarRodapeImagem} />
                </div>
                <span>{nomeFilme}</span>
            </StyledRodape>

        </StyledPaginaSessoes>
    );
}

const StyledPaginaSessoes = styled.main`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #E5E5E5;
`

const StyledContainerConteudoSessoes = styled.div`
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

const StyledContainerSessoes = styled.div`
width: 100%;
justify-content: center;
align-items: center;
`

const StyledSessao = styled.div`
width: 100%;
margin-left: 24px;
margin-bottom: 23px;
    h3{
        width: 241px;
        height: 35px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        margin-top: 11px;
        margin-bottom: 11px;
    }
`

const StyledButton = styled.button`
width: 83px;
height: 43px;
border-radius: 3px;
background-color: #E8833A;
margin-right: 8px;
&:hover{
    cursor: pointer;
}
    span{
        width: 82px;
        height: 43px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`

const StyledRodape = styled.div`
width: 375px;
height: 117px;
display: flex;
justify-content: start;
align-items: center;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
    span{
        width: 169px;
        height: 40px;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }

    div{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 2px;
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin-left: 30px;
        margin-right: 30px;
    }
        img{
            width: 48px;
            height: 72px;
        }
`