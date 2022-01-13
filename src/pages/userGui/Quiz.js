import React, {useState} from 'react'
import AppBarUser from './AppBarUser'
import styled from 'styled-components'

function Quiz() {
     const [questionNumber, SetquestionNumber] = useState(1);
     const questions = [
         {
             'pergunta': "Who as futsal word champion in 2021",
             'opcao1': 'Portugal',
             'opcao2': 'Espanha',
             'opcao3': 'Polonia',
             'opcao4': 'Brazil',
             'opcaoCerta': 'Portugal'
         },
         {
            'pergunta': "Qual a capital de Portugal",
             'opcao1': 'Madrid',
             'opcao2': 'Porto',
             'opcao3': 'Lisboa',
             'opcao4': 'Braga',
             'opcaoCerta': 'Lisboa'
         }
         ,
     ];


    return (
        <div>
           <AppBarUser/>
           <Container>
               <QuestionNumber>
                   {questionNumber}/10
               </QuestionNumber>
               <Question>
                   {questions[questionNumber-1].pergunta}
               </Question>
               <ParButton>
                   <Button type='button' value = {questions[questionNumber-1].opcao1} onClick={(element)=>{
                       if(element.target.value === questions[questionNumber-1].opcaoCerta){
                            element.target.style.backgroundColor = '#70E000';
                       }
                       else{
                            element.target.style.backgroundColor = '#EB1D1D';
                       }
                       if(questionNumber+1===questions.length){
                        setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                        },3000);
                       }
                       else{
                        window.location.pathname = '/index';
                    }
                      
                   }}>  
                   </Button>
                   <Button type='button' value = {questions[questionNumber-1].opcao2} onClick={(element)=>{
                       if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1===questions.length){
                    setTimeout(()=>{
                        SetquestionNumber(questionNumber+1);
                        element.target.style.backgroundColor = 'white';
                    },3000);
                    }
                    else{
                        window.location.pathname = '/index';
                    }
                    }}>
                        
                    </Button>    
               </ParButton>
               <ParButton>
               <Button type='button' value = {questions[questionNumber-1].opcao3} onClick={(element)=>{
                       if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                        
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1===questions.length){
                       
                   setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                        },3000);
                    }
                    else{
                        window.location.pathname = '/index';
                    }
                    }}>  
                    </Button>
                    <Button type='button' value = {questions[questionNumber-1].opcao4} onClick={(element)=>{
                        
                      if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1===questions.length){
                       console.log(questions.length);
                       console.log(questionNumber+1);
                        setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                            
                        },3000);
                    
                    }
                    else{
                        window.location.pathname = '/index';
                    }
                    }}>  
                    </Button>
                </ParButton>
               
           </Container>
           
        </div>
    )
}

export default Quiz

const Container = styled.div`
    
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

`

const QuestionNumber = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-top: 50px;
`

const Question = styled.div`
    font-size: 25px;
`

const ParButton = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-evenly;
`
const Button = styled.input`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 10px;

    :hover{
        border: 1px solid black;
        height: 60px;
        width: 210px;
    }

    
`
