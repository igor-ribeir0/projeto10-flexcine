import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";

export default function ContainerFilmes(){
    const [listaFilmes, setListaFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(resposta => {
            setListaFilmes(resposta.data);
        })
    }, []);

    return(
        <StyledContainerFilmes>
            {listaFilmes.map((filme) => 
            <StyledFilme key={filme.id}>
                <img src={filme.posterURL}/>
            </StyledFilme>)}
        </StyledContainerFilmes>
    );
}

const StyledContainerFilmes = styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
right: 0;
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