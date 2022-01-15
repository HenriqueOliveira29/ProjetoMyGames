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


const AdivinhaAdmin = () => {
    const classes = useStyles();
    const [adivinhas, setAdivinhas] = useState([]);

    useEffect(()=>{
        AdivinhaGet();
    },[])

    const AdivinhaGet = () =>{
        fetch('http://localhost:3001/adivinhas')
        .then(res=>res.json())
        .then((result)=>{setAdivinhas(result.response)})
        
    }

    const AdivinhaDelete = id =>{
        fetch('http://localhost:3001/adivinhas/'+id,{
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
                AdivinhaGet();
            }
        })
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
                                Adivinhas
                            </Typography>
                        </Box>
                        <Box >
                            <Link to="/admin/adivinha/createadivinha">
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
                                        Adivinha
                                    </TableCell>
                                    <TableCell align="left">
                                        resposta
                                    </TableCell>
                                    <TableCell align="left">
                                        pontosXp
                                    </TableCell>
                                    <TableCell align="left">
                                        moedasGanhas
                                    </TableCell>
                                    <TableCell align="center">
                                        id_nivel
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    adivinhas.map((adivinha) => (
                                    <TableRow key={adivinha.id_adivinha}>
                                        <TableCell align="right">
                                            {adivinha.id_adivinha}
                                        </TableCell>
                                        <TableCell align="center">
                                                {adivinha.adivinha}
                                        </TableCell>
                                        <TableCell align="left">
                                            {adivinha.resposta}
                                        </TableCell>
                                        <TableCell align="left">
                                            {adivinha.pontosXp}
                                        </TableCell>
                                        <TableCell align="left">
                                            {adivinha.moedasGanhas}
                                        </TableCell>
                                        <TableCell align="left">
                                            {adivinha.id_nivel}
                                        </TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="buttons">
                                                <Button onClick={()=>console.log('ola')}>
                                                    EDIT
                                                </Button>
                                                <Button onClick={()=>AdivinhaDelete(adivinha.id_adivinha)}>
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

export default AdivinhaAdmin
