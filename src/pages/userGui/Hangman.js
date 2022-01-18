import React, { useState, useEffect } from "react";
import AppBarUser from "./AppBarUser";
import styled from "styled-components";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from 'firebase/auth';

export default function Hangman() {
  const [word, setWord] = useState([]);
  const [wideword, setWideword] = useState([]);
  const [guess, setGuess] = useState("");
  const [erros, setErrors] = useState(10);
  if(word.length != 0){
    word.palavra.split('').map((element, index) =>{
      if(element != " "){
        wideword[index] = '___'
      }
    
    });
  }

  const [email, setEmail] = useState("");

  onAuthStateChanged(auth, (user) =>{
      if(user){
          setEmail(user.email.toString());
      }else{
          console.log(auth);
      }
  })
  

  useEffect(()=>{
    if(word.length == 0){
      fetch('http://localhost:3001/forcas/random')
      .then(res=>res.json())
      .then((result) => {
      setWord(result.response[0]);
    })
    }
    
  })

  const [contador, setContador] = useState(0);
  const abc = "A B C D E F G H I J K L M N O P Q R S T U V Y X W Z";
  const abc1 = abc.split(" ");

  const InserirHistorico = () =>{
        
    var data = {
      email: email,
      id_forca: word.id_forca
    };
    fetch('http://localhost:3001/historicoforca/', {
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
      "xp": word.pontosXpGanhos,
      "moedas": word.moedasGanhas,
      
     
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
      <AppBarUser />
      <Container>
        <Title>
          <h1>Hangman Game</h1>
        </Title>
        <Descricao>
          {word.pista}
        </Descricao>
        <Errors>
          Tentativas: {erros}/10
        </Errors>
        <Letters>
          { 
            wideword.map((element, index) =>{
              return(
                <Letter key={index}>{element}</Letter>
              )
            })
          }
        </Letters>
        <ABC>
          {abc1.map((element, index) => {
            return (
              <Button
                type="button"
                key={index}
                value={element}
                onClick={(button)=>{
                    const widewordclone1 = wideword
                    word.palavra.toUpperCase().split("").map((element, index) =>{
                      
                        if(element == button.target.value){
                            widewordclone1[index] = element;
                        }
                        
                    })
                    
                    setWideword(widewordclone1);
                    console.log(wideword.toString());
                   
                    if(wideword.toString().replaceAll(',', "").toLowerCase() == word.palavra.replaceAll(" ", "").toLowerCase()){
                      alert("Acertou na palavra parabens");
                      addCoinsXp();
                      InserirHistorico();
                        setTimeout(()=>{
                          window.location = "/index";
                      },1000);
                    }
                   
                    button.target.style.backgroundColor = 'grey';
                }
                   
                }
                
                
              ></Button>
            );
          })}
        </ABC>
        <Advinhar>
          <Input type="text" placeholder="Adivinhe a palavra" onChange={(e)=>{
              setGuess(e.target.value);
          }}></Input>
          <Button1 type="button" value="ADIVINHAR" onClick={()=>{
            if(guess.toLowerCase() == word.palavra.toLowerCase()){
              alert("Acertou Parabens");
              addCoinsXp();
              InserirHistorico();
              setTimeout(()=>{
                window.location = "/index";
            },1000);
            }
            else{
              setErrors(erros-1);
              alert("Resposta Errada");
            }
          }}></Button1>
        </Advinhar>
      </Container>
    </div>
  );
}

const Descricao = styled.div`
  
`

const Errors = styled.div`

`
const Container = styled.div`
  width: 100vw;
  height: 90vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.div``;

const Letters = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const Letter = styled.div`
  font-size: 30px;
`;

const ABC = styled.div`
  margin-top: 50px;
  width: 60%;
`;

const Button = styled.input`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2691d9;
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;
const Advinhar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;
const Input = styled.input`
  width: 60%;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;

  :focus {
    outline: none;
  }
`;

const Button1 = styled.input`
  width: 30%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #26a300;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s;


  :hover {
    background-color: #186600;
  }
`;
