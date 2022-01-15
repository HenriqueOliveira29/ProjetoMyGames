import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppBarAdmin = () => {
    return (
        <Container>
        <Navbar>
            <Logo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <LogoName>My Games</LogoName>
                </Link>
                
            </Logo>
            <Actions>
                <Link to={"/admin/forca"} style={{ textDecoration: 'none' }}>
                    <Action>Forca</Action>
                </Link>
                <Link to={"/admin/quiz"} style={{ textDecoration: 'none' }}>
                    <Action>Perguntas</Action>
                </Link>
                <Link to={"/admin/adivinha"} style={{ textDecoration: 'none' }}>
                    <Action>Adivinhas</Action>
                </Link>
                    
                    
                    
                </Actions>
            <Routes>
                <Route>
                    <p>User Name</p> 
                    <img src='https://cdn-icons.flaticon.com/png/512/552/premium/552848.png?token=exp=1641641627~hmac=2036b8a268f234d5d28ed1451809e8da' alt=''>
                    </img>
                </Route>
            </Routes>
        



        </Navbar>
    </Container>
    )
}

const Actions = styled.div`
    width: 50%;
    margin-left: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Action = styled.div`
    padding: 5px;
    color: white;
    font-weight: 700;
`

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
    display: flex;
    align-items: center;
`
const LogoName = styled.div`
    color: white;
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;

`
const Routes = styled.div`
    display : flex;
`
const Route = styled.div`
    margin:20px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        margin-left: 5px;
        width: 40px;
        height: 40px;
        color: white;
    }
`

export default AppBarAdmin
