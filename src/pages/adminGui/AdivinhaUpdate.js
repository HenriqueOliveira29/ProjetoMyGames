import React, { useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { WbIncandescentOutlined } from "@material-ui/icons";

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

function AdivinhaUpdate() {
    const classes = useStyles();
    const {id} = useParams();

    useEffect(()=>{
        fetch("http://localhost:3001/adivinhas/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setadivinha(result.response[0].adivinha);
            setresposta(result.response[0].resposta);
            setpontosXp(result.response[0].pontosXp);
            setmoedasGanhas(result.response[0].moedasGanhas);
            setidnivel(result.response[0].id_nivel);
        })
        
    },[id]);

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            "id_adivinha": id,
            "adivinha": adivinha,
            "resposta": resposta,
            "pontosXp": pontosXp,
            "moedasGanhas": moedasGanhas,
            "id_nivel": idnivel,
           
        }
        fetch("http://localhost:3001/adivinhas/updateAdivinha", {
            method: "PATCH",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then((result)=>{
            if(result['mensagem'] == "Adivinha alterada com sucesso"){
                window.location = "/admin/adivinha";
            }
        });
    }
    const [adivinha, setadivinha] = useState("");
    const [resposta, setresposta] = useState("");
    const [pontosXp, setpontosXp] = useState(0);
    const [moedasGanhas, setmoedasGanhas] = useState(0);
    const [idnivel, setidnivel] = useState(0);

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Adivinha
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="adivinha"
                        variant="outlined"
                        required
                        fullWidth
                        id="adivinha"
                        label="adivinha"
                        value={adivinha}
                        onChange={(e)=>{
                            setadivinha(e.target.value);
                        }}
                        autoFocus>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="resposta"
                        variant="outlined"
                        required
                        fullWidth
                        id="resposta"
                        label="resposta"
                        value={resposta}
                        onChange={(e)=>{
                            setresposta(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        type="number"
                        name="pontosXp"
                        variant="outlined"
                        required
                        fullWidth
                        id="pontosXp"
                        label="pontosXp"
                        value={pontosXp}
                        onChange={(e)=>{
                            setpontosXp(e.target.value);
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
                        <TextField 
                        type="number"
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
                        </TextField>
                    </Grid>
                   
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Update</Button>
            </form>
            
        </div>
    )
}

export default AdivinhaUpdate
