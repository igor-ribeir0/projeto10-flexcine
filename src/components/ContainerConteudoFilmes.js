import styled from "styled-components";
import Logo from "./Logo";
import ContainerFilmes from "./ContainerFIlmes";

export default function ContainerConteudoFilmes(){
    return(
        <StyledContainerConteudoFilmes>
            <Logo />
            <StyledDivH2>
                <h2>Selecione o filme</h2>
            </StyledDivH2>
            <ContainerFilmes />
        </StyledContainerConteudoFilmes>
    );
}

const StyledContainerConteudoFilmes = styled.div`
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