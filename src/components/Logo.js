import styled from "styled-components";

export default function Logo(){
    return(
        <StyledLogo>
            <h1>CINEFLEX</h1>
        </StyledLogo>
    );
}

const StyledLogo = styled.div`
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-content: center;
background-color: #C3CFD9;
    h1{
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
        margin: auto;
    }
`