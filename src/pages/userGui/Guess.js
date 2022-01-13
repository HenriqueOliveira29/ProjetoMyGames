import React, {useState, useEffect} from 'react'
import AppBarUser from './AppBarUser'
import styled from 'styled-components'

export default function Guess() {
    const [wordguess, setwordguess] = useState("");
    const [guess, setGuess] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/adivinhas/1")
        .then(res => res.json())
        .then((result)=> {
            setGuess(result.response[0])
            
        });
        
    }, [])

    return (
        <div>
            <AppBarUser/>
            <Container>
                <GameName>
                    <h2>Guess What</h2>
                </GameName>
                <Guessphrase>
                    <h3>{guess.adivinha}</h3>
                </Guessphrase>
                <Input type='text' placeholder="Answer" onChange={(value)=>{
                    setwordguess(value.target.value);
                }}>
                
                </Input>

                <br/>

                <Button onClick={()=>{
                    if(guess.resposta.trim().toLowerCase() == wordguess.trim().toLowerCase()){
                        alert("Acertou parabens")
                        
                    }
                    else{
                        alert("Tente Novamente")
                    }
                }}>
                    GUESS
                </Button>
            </Container>
        </div>
    )
}
const Container = styled.div`
    position: fixed;
    width: 100vw;
    height : 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const GameName = styled.div`
    
`

const Guessphrase = styled.div`
    margin-bottom: 50px;
`

const Input = styled.input`
    padding: 10px;
    font-size 18px;
    border: 1px solid grey;
    border-radius: 10px;
    width: 50%;
    text-decoration: none;
    :focus{
        outline: 0;
    }
`

const Button = styled.button`
    width: 30%;
    padding: 20px;
    margin-bottom:100px;
    border: none;
    border-radius: 10px;
    background-color:#0ead69;
    color: white;
    font-weight: 600;
    font-size: 20px;
    transition: 0.3s;

    :hover{
        background-color: #02c39a;
    }
`
