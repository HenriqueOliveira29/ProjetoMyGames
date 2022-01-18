import React, {useState, useEffect} from 'react'
import AppBarUser from './AppBarUser'
import styled from 'styled-components'


function Quiz() {
     const [questionNumber, SetquestionNumber] = useState(1);
     const [questions, setQuestions] = useState([]);
     const [respostascertas, setCertas] = useState(0);
    
        
    
     useEffect(() => {
        readPerguntas();
     }, [])

     const readPerguntas = () => {
         fetch('http://localhost:3001/perguntas/randompergunta')
        .then(res => res.json())
        .then((result)=>{
            setQuestions(result)
        })
     }
     
    return (
        <div>
           <AppBarUser/>
           {
               (questions.length > 0) ?
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
                            setCertas(respostascertas+1);
                       }
                       else{
                            element.target.style.backgroundColor = '#EB1D1D';
                       }
                       if(questionNumber+1<=questions.length){
                        setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                        },2000);
                       }
                       else{
                        alert("Acertou " + respostascertas);
                        setTimeout(()=>{
                            window.location.pathname = '/index';
                        },3000);
                    }
                      
                   }}>  
                   </Button>
                   <Button type='button' value = {questions[questionNumber-1].opcao2} onClick={(element)=>{
                       if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                        setCertas(respostascertas+1);
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1<=questions.length){
                    setTimeout(()=>{
                        SetquestionNumber(questionNumber+1);
                        element.target.style.backgroundColor = 'white';
                    },3000);
                    }
                    else{
                        alert("Acertou " + respostascertas);
                        setTimeout(()=>{
                            window.location.pathname = '/index';
                        },3000);
                        
                    }
                    }}>
                        
                    </Button>    
               </ParButton>
               <ParButton>
               <Button type='button' value = {questions[questionNumber-1].opcao3} onClick={(element)=>{
                       if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                        setCertas(respostascertas+1);
                        
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1<=questions.length){
                       
                   setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                        },3000);
                    }
                    else{
                        alert("Acertou " + respostascertas);
                        setTimeout(()=>{
                            window.location.pathname = '/index';
                        },3000);
                    }
                    }}>  
                    </Button>
                    <Button type='button' value = {questions[questionNumber-1].opca4} onClick={(element)=>{
                        
                      if(element.target.value === questions[questionNumber-1].opcaoCerta){
                        element.target.style.backgroundColor = '#70E000';
                        setCertas(respostascertas+1);
                   }
                   else{
                        element.target.style.backgroundColor = '#EB1D1D';
                   }
                   if(questionNumber+1<=questions.length){
                       console.log(questions.length);
                       console.log(questionNumber+1);
                        setTimeout(()=>{
                            SetquestionNumber(questionNumber+1);
                            element.target.style.backgroundColor = 'white';
                            
                        },3000);
                    
                    }
                    else{
                        alert("Acertou " + respostascertas);
                        setTimeout(()=>{
                            window.location.pathname = '/index';
                        },3000);
                    }
                    }}>  
                    </Button>
                </ParButton>
               
           </Container>
               :
               console.log("")
           
           }
          
           
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
