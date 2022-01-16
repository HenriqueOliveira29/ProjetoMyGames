import React from 'react'
import AppBarUser from './AppBarUser'
import styled from 'styled-components'
import { Link } from 'react-router-dom'




export default function Index() {
    
    return (
        <div>
            <AppBarUser/>
            <Container>
                <Title>
                    <h2>
                        What those games you want to play 
                    </h2>
                </Title>
                <Games>
                    <Link to={'/hangman'} style={{ textDecoration: 'none' }}>
                    
                    <Game>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfkrs3ki1r-wBsasZo0qAACqydiaMiYyjyw&usqp=CAU'></Image>
                        <Name>Hangman Game</Name>
                    </Game>
                    </Link>
                    <Link to={'/guessWhat'} style={{ textDecoration: 'none' }}>
                    <Game>
                        <Image src='https://fazendoanossafesta.com.br/wp-content/uploads/2019/07/ponto-interrogacao-Ursinho-Baloeiro.png'></Image>
                        <Name>Guess What</Name>
                    </Game>
                    </Link>
                    <Link to={'/quiz'} style={{ textDecoration: 'none' }}>
                    <Game>
                        <Image src='https://st2.depositphotos.com/1915171/5331/v/950/depositphotos_53310865-stock-illustration-question-mark-sign-icon-help.jpg'></Image>
                        <Name>Quiz</Name>
                    </Game>
                    </Link>
                </Games>
            </Container>
            
        </div>
    )
}

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height : 90vh;
    display: flex;
    flex-direction:column; 
    justify-content: space-evenly;
    
    
`

const Title = styled.div`
    display: block;
    text-align: center;
    h2{
        font-weight: normal
    }
`
const Games = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;


`

const Game = styled.div`
    padding: 5px;
    cursor: pointer;
    border: 1px solid #adb5bd;
    border-radius: 10px;
    transition: 0.5s;

    :hover{
        border: 2px solid black;
        padding: 10px;
        
    }
`

const Image = styled.img`
    width: 15rem;
    height: 15rem;
`

const Name = styled.div`
    color: black;
    font-weight: 700;
`


