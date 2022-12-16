import styled from "styled-components";
import Logo from "./Logo";
import {useNavigate} from "react-router-dom";

export default function PaginaSucesso(props){
    const {nomeFilme, dataFilme, tempoFilme, assentosLista, guardarCpf, guardarNome} = props;
    const {setNomeFilme, setDataFilme, setTempoFilme, setAssentosLista, setGuardarCpf, setGuardarNome} = props;
    const navigate = useNavigate();

    function voltarHome(){
        setNomeFilme('');
        setDataFilme('');
        setTempoFilme('');
        setAssentosLista([]);
        setGuardarCpf('');
        setGuardarNome('');
        navigate("/");
    }

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
                        <StyledDivTitulo><p>{nomeFilme}</p></StyledDivTitulo>
                        <StyledDivParagrafos>
                            <p>{dataFilme}</p>
                            <p>{tempoFilme}</p>
                        </StyledDivParagrafos>
                    </StyledDado>

                    <StyledDado>
                        <h3>Ingressos</h3>
                        {assentosLista.map((assento) =>
                        <StyledParagrafo key={assento}>Assento {assento}</StyledParagrafo>)}
                    </StyledDado>

                    <StyledDado>
                        <h3>Comprador</h3>
                        <p>Nome: {guardarNome}</p>
                        <p>CPF: {guardarCpf}</p>
                    </StyledDado>
                </StyledContainerDados>

                <StyledButton onClick={voltarHome}>
                    <span>Voltar pra Home</span>
                </StyledButton>
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
        margin-top: -40px;
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

const StyledDivTitulo = styled.div`
width: 100%;
display: flex;
align-items: center;
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

const StyledDivParagrafos = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
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

const StyledParagrafo = styled.p`
width: 374px;
height: 110px;
font-weight: 400;
font-size: 22px;
line-height: 26px;
color: #293845;
margin-top: -65px;
`

const StyledButton = styled.button`
width: 225px;
height: 42px;
border-radius: 3px;
background-color: #E8833A;
margin-bottom: 300px;
&:hover{
    cursor: pointer;
}
    span{
        width: 225px;
        height: 42px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF
    }
`