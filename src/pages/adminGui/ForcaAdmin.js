import React ,{useEffect,useState}from 'react'
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

const Forca = () => {
    const classes = useStyles();
    const [forcas, setForcas] = useState([]);


    useEffect(()=>{
        ForcaGet();
    },[])

    const ForcaGet = () => {
        fetch('http://localhost:3001/forcas')
        .then(res=>res.json())
        .then((result)=>{setForcas(result.response)})
    }

    const ForcaDelete = id =>{
        fetch('http://localhost:3001/forcas/'+id,{
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
                ForcaGet();
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
                                Forcas
                            </Typography>
                        </Box>
                        <Box >
                            <Link to="/admin/forca/createForca">
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
                                        palavra
                                    </TableCell>
                                    <TableCell align="left">
                                        pista
                                    </TableCell>
                                    <TableCell align="left">
                                        pontosXp
                                    </TableCell>
                                    <TableCell align="left">
                                        moedasGanhas
                                    </TableCell>
                                    <TableCell align="center">
                                        id_tema
                                    </TableCell>
                                    <TableCell align="center">
                                        id_nivel
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    forcas.map((forca) => (
                                    <TableRow key={forca.id_forca}>
                                        <TableCell align="right">
                                            {forca.id_forca}
                                        </TableCell>
                                        <TableCell align="center">
                                            {forca.palavra}
                                        </TableCell>
                                        <TableCell align="left">
                                            {forca.pista}
                                        </TableCell>
                                        <TableCell align="left">
                                            {forca.pontosXpGanhos}
                                        </TableCell>
                                        <TableCell align="left">
                                            {forca.moedasGanhas}
                                        </TableCell>
                                        <TableCell align="left">
                                            {forca.id_tema}
                                        </TableCell>
                                        <TableCell align="left">
                                            {forca.id_nivel}
                                        </TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="buttons">
                                                <Button onClick={()=>console.log('ola')}>
                                                    EDIT
                                                </Button>
                                                <Button onClick={()=>ForcaDelete(forca.id_forca)}>
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

export default Forca
