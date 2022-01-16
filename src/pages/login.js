
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Appbar from '../Appbar'
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from 'firebase/auth';


function LoginPage() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if(auth.currentUser != null){
                window.location = '/index'
            }            
          
        }
        catch(error) {
            console.log(error.message);
        }
    }
    return (
        <Container>
            <Appbar></Appbar>
            <h1>Login</h1>

            
                <Inputs>
                    <div>
                        <input type="email" required onChange={(event) => { setLoginEmail(event.target.value) }}></input>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div>
                        <input type="password" required onChange={(event) => { setLoginPassword(event.target.value) }}></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                </Inputs>
                <Pass>
                    <div>Forgot Password?</div>

                    <input type="submit" value="Login" onClick={login}></input>
                </Pass>
                <SignUp>
                    <div>
                        Not a member? <a><Link to={"/createAccount"}>Sign Up</Link></a>
                    </div>
                </SignUp>
           
        </Container>
    )
}

export default LoginPage;

const Container = styled.div`
    position:absolute;
    form{
        font-family:montserrat;
        height:100vh;
        padding: 0 40px;
    }
    h1{
        text-align:center;
        padding:0 0 20px 0;
        
    }
    
   
`

const Inputs = styled.div`
    width:50%;
    margin:0 auto;
    display: block;
    div{
        position:relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
    }
    input{
        width:100%;
        padding:0 5px;
        height:40px;
        font-size:16px;
        border:none;
        background:none;
        outline:none;
    }
    label{
        position: absolute;
        top:50%;
        left:5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size:16px;
        pointer-events:none;
        transition:.5s;
    }
    span::before{
        content:'';
        position:absolute;
        top:40px;
        left:0;
        width:0%;
        height:2px;    
        background:#2691d9;
        transition: .5s;
    }
    input:focus~label,
    input:valid~label{
        top:-5px;
        color:#2691d9;
    }
       input:focus~span::before,
    input:valid~span::before{
        width:100%;
    }
`
const Pass = styled.div`
    div{
        margin: -5px 0 20px 5px;
        color: #a6a6a6;
        cursor:pointer;
    }
    div:hover{
        text-decoration:underline;
    }
     input[type="submit"]{
         width:50%;
         height:50px;
         border:1px solid;
         background: #2691d9;
         border-radius:25px;
         font-size:18px;
         color:#e9f4fb;
         font-weight:700;
         cursor:pointer;
         outline:none;
     }
     input[type="submit"]:hover{
         border-color: #2691d9;
         transition:.5s;
     }
`
const SignUp = styled.div`
     div{
         margin:30px 0;
         text-align:center;
         font-size:16px;
         color:#666666;
     }
     div a{
         color:#2691d9;
         text-decoration:none;
     }
     div a:hover{
         text-decoration: underline;
     }

`
