import React, { useState, useEffect } from "react";
import AppBarUser from "./AppBarUser";
import styled from "styled-components";
import Parser from "html-react-parser";

export default function Hangman() {
  const word = ['M', 'A', 'C' , 'A', 'C', 'O']
  const [wideword, setWideword] = useState([]);
  word.map((element, index) =>{
    wideword[index] = '___'
  });

  

  
 
  
  const [contador, setContador] = useState(0);
  const abc = "A B C D E F G H I J K L M N O P Q R S T U V Y X W Z";
  const abc1 = abc.split(" ");

  

  return (
    <div>
      <AppBarUser />
      <Container>
        <Title>
          <h1>Hangman Game</h1>
        </Title>
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
                    word.map((element, index) =>{
                        if(element == button.target.value){
                            widewordclone1[index] = element;
                        }
                    })
                    setWideword(widewordclone1);
                    console.log(wideword)
                    button.target.style.backgroundColor = 'grey';
                }
                   
                }
                
                
              ></Button>
            );
          })}
        </ABC>
        <Advinhar>
          <Input type="text" placeholder="Adivinhe a palavra"></Input>
          <Button1 type="button" value="ADIVINHAR"></Button1>
        </Advinhar>
      </Container>
    </div>
  );
}

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
