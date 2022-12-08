import styled from "styled-components";
import ContainerConteudo from "./ContainerConteudo";

export default function ContainerMain(){
    return(
        <StyledMain>
            <ContainerConteudo />
        </StyledMain>
    );
}

const StyledMain = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`