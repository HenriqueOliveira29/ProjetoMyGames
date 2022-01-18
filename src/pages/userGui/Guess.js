import React, {useState, useEffect} from 'react'
import AppBarUser from './AppBarUser'
import styled from 'styled-components'
import { auth } from "../firebase-config";
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Guess() {
    const [wordguess, setwordguess] = useState("");
    const [guess, setGuess] = useState([]);
    const [email, setEmail] = useState("");

    onAuthStateChanged(auth, (user) =>{
        if(user){
            setEmail(user.email.toString());
        }else{
            console.log(auth);
        }
    })

    useEffect(() => {
        fetch("http://localhost:3001/adivinhas/getadivinha")
        .then(res => res.json())
        .then((result)=> {
            setGuess(result.response[0])
            
        });
        
    }, [])

    const InserirHistorico = () =>{
        
        var data = {
          email: email,
          id_adivinha: guess.id_adivinha
        };
        fetch('http://localhost:3001/historicoadivinha/', {
            method: "POST",
            headers: {
              Accept: "application/form-data",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => res.json())
    }

    const addCoinsXp = () => {
        var data = {
            "Email": email,
            "xp": guess.pontosXp,
            "moedas": guess.moedasGanhas,
            
           
        }
        fetch("http://localhost:3001/jogador/addcoins", {
            method: "PATCH",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json());
    
    }
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
                        alert("Acertou Parabens");
                        addCoinsXp();
                        InserirHistorico();
                        setTimeout(()=>{
                            window.location.reload();
                        },2000);
                        
                       
                    }
                    else{
                        
                        alert("Errado, tente novamente")
                        
                    }
                }}>
                    GUESS
                </Button>
            </Container>
        </div>
    )
    }
  

const Resultwrong = styled.div`
    p{
        color: red;
    }
`
const Result = styled.div`
    p{
        color: green;
    }
`
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
`;
