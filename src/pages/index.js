import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from './login';
import CreateAccount from './createAccount';
import PaginaInicial from './paginaInicial';
import IndexAdmin from './adminGui/index'
import Index from './userGui';
import Quiz from './userGui/Quiz';
import Hangman from './userGui/Hangman';
import Guess from './userGui/Guess';
import AdivinhaAdmin from './adminGui/AdivinhaAdmin';
import Forca from './adminGui/ForcaAdmin';
import Quizadmin from './adminGui/Quizadmin';
import AdivinhaUpdate from './adminGui/AdivinhaUpdate';
import Adivinhacreate from './adminGui/Adivinhacreate';
import Forcacreate from './adminGui/ForcaCreate';
import Forcaupdate from './adminGui/ForcaUpdate';
import Quizcreate from './adminGui/QuizCreate';
import Quizupdate from './adminGui/Quizupdate';
import UsersAdmin from './adminGui/UsersAdmin';
import UsersUpdate from './adminGui/UsersUpdate';




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
                <Route exact path='/admin' element={<IndexAdmin></IndexAdmin>}></Route>
                <Route exact path='/admin/adivinha' element={<AdivinhaAdmin></AdivinhaAdmin>}></Route>
                <Route exact path='/admin/forca' element={<Forca></Forca>}></Route>
                <Route exact path='/admin/quiz' element={<Quizadmin></Quizadmin>}></Route>
                <Route exact path='/admin/updateadivinha/:id' element={<AdivinhaUpdate></AdivinhaUpdate>}></Route>
                <Route exact path='/admin/adivinha/createadivinha' element={<Adivinhacreate/>}></Route>
                <Route exact path='/admin/forca/updateforca/:id' element={<Forcaupdate></Forcaupdate>}></Route>
                <Route exact path='/admin/forca/createForca' element={<Forcacreate/>}></Route>
                <Route exact path='/admin/quiz/updatequiz/:id' element={<Quizupdate></Quizupdate>}></Route>
                <Route exact path='/admin/quiz/createQuiz' element={<Quizcreate/>}></Route>
                <Route exact path='/admin/users' element={<UsersAdmin/>}></Route>
                <Route exact path='/admin/usersupdate/:email' element={<UsersUpdate/>}></Route>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Routes2
