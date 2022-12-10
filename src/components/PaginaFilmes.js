import styled from "styled-components";
import ContainerConteudoFilmes from "./ContainerConteudoFilmes";

export default function ContainerMain(){
    return(
        <StyledPaginaFilmes>
            <ContainerConteudoFilmes />
        </StyledPaginaFilmes>
    );
}

const StyledPaginaFilmes = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #E5E5E5;
`