import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from './login';
import CreateAccount from './createAccount';
import PaginaInicial from './paginaInicial';
import Index from './userGui';
import Quiz from './userGui/Quiz';
import Hangman from './userGui/Hangman';
import Guess from './userGui/Guess';

function Routes2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicial />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/createAccount" element={<CreateAccount />} />
                <Route exact path="/index" element={<Index/>} />
                <Route exact path="/guessWhat" element={<Guess/>}></Route>
                <Route exact path="/hangman" element={<Hangman/>}></Route>
                <Route exact path="/quiz" element={<Quiz/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routes2
