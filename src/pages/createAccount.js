import { useState } from 'react';

import Appbar from '../Appbar'
import styled from 'styled-components'
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccount() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
   

    const register = async () => {
            try {
                const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
                if(auth.currentUser!= null){
                    window.location = "/index"
                }
            }
            catch (error) {
                console.log(error.message);
            }
    
    }
       
    

    return (
        <div>
            <Appbar></Appbar>
            <h1>Create Account</h1>
                <Inputs>
                    <div>
                        <input type="email" required onChange={(event) => { setRegisterEmail(event.target.value) }}></input>
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div>
                        <input type="password" required onChange={(event) => { setRegisterPassword(event.target.value) }}></input>
                        <span></span>
                        <label>Password</label>
                    </div>

                </Inputs>
                <Button onClick={register}>
                    <input type="submit" value="Create"></input>
                </Button>
            
        </div>
    )
}

export default CreateAccount

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

const Button = styled.div`
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
     }`
