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
import AppBarAdmin from '../adminGui/AppBarAdmin'


const useStyles = makeStyles((theme)=>({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(2),},
    title: {flexGrow: 1},
    container: {marginTop: theme.spacing(2)},
    paper: {padding: theme.spacing(2), color: theme.palette.text.secondary},
}));

const UsersAdmin = () => {
    const classes = useStyles();
    const [user, setuser] = useState([]);

    useEffect(()=>{
        userGet();
    },[])

    const userGet = () =>{
        fetch('http://localhost:3001/jogador')
        .then(res=>res.json())
        .then((result)=>{setuser(result.response)})
        
    }

    const UserDelete = id =>{
        fetch('http://localhost:3001/jogador'+id,{
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
                userGet();
            }
        })
    }

    const UserUpdate = email => {
        
        window.location= "/admin/usersupdate/"+email;
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
                                Users
                            </Typography>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="User List">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        Email
                                    </TableCell>
                                    <TableCell align="center">
                                        XP
                                    </TableCell>
                                    <TableCell align="left">
                                        Moedas
                                    </TableCell>
                                    <TableCell align="left">
                                       nickname
                                    </TableCell>
                                    <TableCell align="left">
                                        role
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    user.map((user) => (
                                    <TableRow key={user.id_pergunta}>
                                        <TableCell align="right">
                                            {user.Email}
                                        </TableCell>
                                        <TableCell align="center">
                                            {user.xp}
                                        </TableCell>
                                        <TableCell align="left">
                                            {user.moedas}
                                        </TableCell>
                                        <TableCell align="left">
                                            {user.nickname}
                                        </TableCell>
                                        <TableCell align="left">
                                            {user.role}
                                        </TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="buttons">
                                                <Button onClick={()=>UserUpdate(user.Email)}>
                                                    EDIT
                                                </Button>
                                                <Button onClick={()=>UserDelete(user.Email)}>
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

export default UsersAdmin
