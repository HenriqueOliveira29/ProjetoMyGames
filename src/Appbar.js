import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Appbar = () => {
    return (
        <Container>
            <Navbar>
                <Logo>
                    <LogoName>My Games</LogoName>
                </Logo>
                <Routes>
                    <Link to={"/login"}><Route>Login</Route></Link>
                    <Link to={"/createAccount"}><Route>CreateAccount</Route></Link>
                </Routes>




            </Navbar>
        </Container>

    )
}

export default Appbar

const Container = styled.div`
width: 100vw;
height: 10vh;
background-color: #48CAE4;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
`

const Navbar = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    
`
const Logo = styled.div`

`
const LogoName = styled.a`
    color: white;
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;

`
const Routes = styled.div`
    
`
const Route = styled.a`
    margin:10px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

