import styled from "styled-components";
import Logo from "./Logo";

export default function PaginaSucesso(props){
    const {nomeFilme} = props;

    return(
        <StyledPaginaSucesso>
            <StyledContainerConteudoSucesso>
                <Logo />
                <StyledDivH2>
                    <h2>Pedido feito com sucesso!</h2>
                </StyledDivH2>

                <StyledContainerDados>
                    <StyledDado>
                        <h3>Filme e sessão</h3>
                        <p>{nomeFilme}</p>
                        <p></p>
                    </StyledDado>

                    <StyledDado>
                        <h3>Ingressos</h3>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </StyledDado>

                    <StyledDado>
                        <h3>Comprador</h3>
                        <p>Nome: João da Silva</p>
                        <p>CPF: 123.456.789-10</p>
                    </StyledDado>
                </StyledContainerDados>

            </StyledContainerConteudoSucesso>
        </StyledPaginaSucesso>
    );
}

const StyledPaginaSucesso = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #E5E5E5;
`

const StyledContainerConteudoSucesso = styled.div`
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`

const StyledDivH2 = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
word-wrap: wrap;
    h2{
        width: 374px;
        height: 110px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #247A6B;
        margin-left: 48px;
    }
`

const StyledContainerDados = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledDado = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-left: 50px;
    h3{
        width: 374px;
        height: 110px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        margin-top: -30px;
    }
    p{
        width: 374px;
        height: 110px;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
        margin-top: -65px;
    }
`