import styled from "styled-components";
import ContainerMain from "./ContainerMain";

export default function ContainerGlobal(){
    return(
        <StyledContainerGlobal>
            <ContainerMain />
        </StyledContainerGlobal>
    );
}

const StyledContainerGlobal = styled.div`
height: 100vh;
background-color: #E5E5E5;
`