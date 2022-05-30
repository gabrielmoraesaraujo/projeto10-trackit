import styled from "styled-components";
import { useContext } from "react";

import TokenContext from "../contexts/TokenContext";
import Header from "./Header";
import Footer from "./Footer";


export default function Historico(){


    const {porcentagemConcluidos} = useContext(TokenContext);
    return(
        <>
            <Header />
            <HistoricoLay> 
                <h1>Historico</h1>
                <p>Em breve você podera ver o historico dos seus habitos aqui</p>
            </HistoricoLay>
            <Footer porcentagemConcluidos={porcentagemConcluidos}/>
    
        </>
    );
}

const HistoricoLayout = styled.div`

    width: 100%;
    padding: 10px;
    margin-top: 20%;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #125BA5;

    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`