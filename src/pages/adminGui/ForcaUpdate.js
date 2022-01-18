import React, { useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { WbIncandescentOutlined } from "@material-ui/icons";
import AppBarAdmin from "./AppBarAdmin";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(0),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Forcaupdate = () => {

    const classes = useStyles();
    const {id} = useParams();
    
    useEffect(()=>{
        fetch("http://localhost:3001/forcas/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setpalavra(result.response[0].palavra);
            setpista(result.response[0].pista);
            setpontosXpGanhos(result.response[0].pontosXpGanhos);
            setmoedasGanhas(result.response[0].moedasGanhas);
            setidtema(result.response[0].id_tema);
            setidnivel(result.response[0].id_nivel);
        })
        
    },[id]);

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            "id_forca": id,
            "palavra": palavra,
            "pista": pista,
            "pontosXpGanhos": pontosXpGanhos,
            "moedasGanhas": moedasGanhas,
            "id_tema": idtema,
            "id_nivel": idnivel,
           
        }
        fetch("http://localhost:3001/forcas/", {
            method: "PATCH",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then((result)=>{
            if(result['mensagem'] =="Adivinha alterada com sucesso"){
                window.location = "/admin/forca";
            }
        });
    }

    const [palavra, setpalavra] = useState("");
    const [pista, setpista] = useState("");
    const [pontosXpGanhos, setpontosXpGanhos] = useState(0);
    const [moedasGanhas, setmoedasGanhas] = useState(0);
    const [idtema, setidtema] = useState(0);
    const [idnivel, setidnivel] = useState(0);

    return (
        <div>
        <AppBarAdmin></AppBarAdmin>
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Forca
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        
                        name="palavra"
                        variant="outlined"
                        required
                        fullWidth
                        id="palavra"
                        label="palavra"
                        value={palavra}
                        onChange={(e)=>{
                            setpalavra(e.target.value);
                        }}
                        autoFocus>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="pista"
                        variant="outlined"
                        required
                        fullWidth
                        id="pista"
                        label="pista"
                        value={pista}
                        onChange={(e)=>{
                            setpista(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        type="number"
                        name="pontosXpGanhos"
                        variant="outlined"
                        required
                        fullWidth
                        id="pontosXpGanhos"
                        label="pontosXpGanhos"
                        value={pontosXpGanhos}
                        onChange={(e)=>{
                            setpontosXpGanhos(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        type="number"
                        name="moedasGanhas"
                        variant="outlined"
                        required
                        fullWidth
                        id="moedasGanhas"
                        label="moedasGanhas"
                        value={moedasGanhas}
                        onChange={(e)=>{
                            setmoedasGanhas(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Select
                        
                        name="idnivel"
                        variant="outlined"
                        required
                        fullWidth
                        id="idnivel"
                        label="idnivel"
                        value={idnivel}
                        onChange={(e)=>{
                            setidnivel(e.target.value);
                        }}
                        >
                        <MenuItem value={1}>
                            <em>Muito Facil</em>
                        </MenuItem>
                        <MenuItem value={2}>
                            <em>Facil</em>
                        </MenuItem>
                        <MenuItem value={3}>
                            <em>Medio</em>
                        </MenuItem>
                        <MenuItem value={4}>
                            <em>Dificil</em>
                        </MenuItem>
                        <MenuItem value={5}>
                            <em>Muito Dificil</em>
                        </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Select
                        
                        name="idtema"
                        variant="outlined"
                        required
                        fullWidth
                        id="idtema"
                        label="idtema"
                        value={idtema}
                        onChange={(e)=>{
                            setidtema(e.target.value);
                        }}
                        >
                        
                          <MenuItem value={1}>
                          <em>Animal</em>
                          </MenuItem>
                          <MenuItem value={2}>
                          <em>Profissao</em>
                          </MenuItem>
                          <MenuItem value={3}>
                          <em>Personagens</em>
                          </MenuItem>
                          <MenuItem value={4}>
                          <em>Ator</em>
                          </MenuItem>
                          <MenuItem value={5}>
                          <em>Marca</em>
                          </MenuItem>
                          <MenuItem value={6}>
                          <em>Desenho Animado</em>
                          </MenuItem>
                          <MenuItem value={7}>
                          <em>Desportista</em>
                          </MenuItem>
                          

                        </Select>
                    </Grid>
                   
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Update</Button>
            </form>
            
        </div>
    </div>
    );
}

export default Forcaupdate
