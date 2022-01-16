import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import AppBarAdmin from './AppBarAdmin';
import AppBarUser from '../userGui/AppBarUser';

const useStyles = makeStyles((theme)=>({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(2),},
    title: {flexGrow: 1},
    container: {marginTop: theme.spacing(2)},
    paper: {padding: theme.spacing(2), color: theme.palette.text.secondary},
}));

const Quizadmin = () => {
    const classes = useStyles();
    const [quiz, setquiz] = useState([]);

    useEffect(()=>{
        quizGet();
    },[])

    const quizGet = () =>{
        fetch('http://localhost:3001/perguntas')
        .then(res=>res.json())
        .then((result)=>{setquiz(result.response)})
        
    }

    const QuizDelete = id =>{
        fetch('http://localhost:3001/perguntas'+id,{
            method:'DELETE',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then((result) => {
            alert(result['mensagem']);
            if(result['status'] === 'ok'){
                quizGet();
            }
        })
    }
    const UpdateQuiz = id => {
        
        window.location= "/admin/quiz/updatequiz/"+id;
    }

    return (
        <div>
            <AppBarAdmin/>
            <div className={classes.root}>
            <Container className={classes.container} maxWidth='lg'>
                <Paper className={classes.paper}>
                    <Box display='flex'>
                        <Box flexGrow={1}>
                            <Typography component="h2" variant="h6" color='primary' gutterBottom>
                               Perguntas
                            </Typography>
                        </Box>
                        <Box >
                            <Link to="/admin/quiz/createQuiz">
                                <Button variant='contained' color="primary">
                                    CREATE
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="User List">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        ID
                                    </TableCell>
                                    <TableCell align="center">
                                        pergunta
                                    </TableCell>
                                    <TableCell align="left">
                                        opcao1
                                    </TableCell>
                                    <TableCell align="left">
                                       opcao2
                                    </TableCell>
                                    <TableCell align="left">
                                        opcao3
                                    </TableCell>
                                    <TableCell align="left">
                                        opcao4
                                    </TableCell>
                                    <TableCell align="left">
                                        opcaoCerta
                                    </TableCell>
                                    <TableCell align="center">
                                        id_nivel
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    quiz.map((quiz) => (
                                    <TableRow key={quiz.id_pergunta}>
                                        <TableCell align="right">
                                            {quiz.id_pergunta}
                                        </TableCell>
                                        <TableCell align="center">
                                                {quiz.pergunta}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.opcao1}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.opcao2}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.opcao3}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.opca4}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.opcaoCerta}
                                        </TableCell>
                                        <TableCell align="left">
                                            {quiz.id_nivel}
                                        </TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="buttons">
                                                <Button onClick={()=>UpdateQuiz(quiz.id_pergunta)}>
                                                    EDIT
                                                </Button>
                                                <Button onClick={()=>QuizDelete(quiz.id_pergunta)}>
                                                    DELETE
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </div>
        </div>
    )
}

export default Quizadmin
