import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from './login';
import CreateAccount from './createAccount';
import PaginaInicial from './paginaInicial';

function Routes2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicial />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/createAccount" element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routes2
