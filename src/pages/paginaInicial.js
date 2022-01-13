import React from 'react'
import styled from 'styled-components'
import Appbar from '../Appbar';
import axios from 'axios';
import { useEffect , useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup"


export default function PaginaInicial() {
    
    return (
        <><Appbar />
        <Container>
            <Title>
            <h1>Play your favorite </h1>
            <h1>Games</h1>
            <h2>Have fun.</h2>
            </Title>
            <Img src= "/images/jogos.png" alt = ""></Img>
        </Container>
        
        </>


    );

}

const Container = styled.div`
  
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;


`

const Title = styled.div`
    margin: 50px
`

const Img = styled.img`
`

