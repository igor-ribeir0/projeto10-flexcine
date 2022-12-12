import styled from "styled-components";
import ContainerConteudoFilmes from "./ContainerConteudoFilmes";

export default function ContainerMain(props){
    const {setNomeFilme, setGuardarRodapeImagem} = props;
    return(
        <StyledPaginaFilmes>
            <ContainerConteudoFilmes 
                setNomeFilme={setNomeFilme} 
                setGuardarRodapeImagem={setGuardarRodapeImagem}
            />
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