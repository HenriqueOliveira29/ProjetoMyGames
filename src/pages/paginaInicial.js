import React from 'react'
import styled from 'styled-components'
import Appbar from '../Appbar';


export default function PaginaInicial() {
    return (
        <><Appbar /><Container>
            <h1>Play your favorite </h1>
            <h1>Games</h1>
            <h2>Have fun.</h2>
            <img src="/images/jogos.png" alt=""></img>
        </Container></>


    );

}

const Container = styled.div`
    h1{
       width:50%;
       height:60%;
    }
    h2{
       width:50%;
       height:60%;
       font-weight:300;
    }
    img{
        width:45%;
        top:0;
        padding: 0 20px;  
    }
    `

