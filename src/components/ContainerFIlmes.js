import styled from "styled-components";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ContainerFilmes(props){
    const [listaFilmes, setListaFilmes] = useState([]);
    const {setNomeFilme} = props;

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(resposta => {
            setListaFilmes(resposta.data);
        })

        promise.catch(error => {
            console.log(error.response.status);
        })
    }, []);

    if(listaFilmes.length === 0){
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
    }

    function guardarFilme(nomeFilme){
        setNomeFilme(nomeFilme);
    }

    return(
        <StyledContainerFilmes>
            {listaFilmes.map((filme) => 
            <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                <StyledFilme>
                    <img src={filme.posterURL} onClick={() => guardarFilme(filme.title)}/>
                </StyledFilme>
            </Link>)}
        </StyledContainerFilmes>
    );
}

const StyledContainerFilmes = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
overflow-y: hidden;
`

const StyledFilme = styled.div`
width: 145px;
height: 209px;
border-radius: 3px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    img{
        width: 129px;
        height: 193px;
    }
    &:hover{
        cursor: pointer;
    }
`