import React, { useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { WbIncandescentOutlined } from "@material-ui/icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AppBarUser from "../userGui/AppBarUser";

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

    
const Quizupdate = () => {

    const classes = useStyles();
    const {id} = useParams();
    

    useEffect(()=>{
        fetch("http://localhost:3001/perguntas/"+id)
        .then(res=>res.json())
        .then((result)=>{
            console.log(result.response[0].pergunta);

            setPergunta(result.response[0].pergunta);
            setOpcao1(result.response[0].opcao1);
            setOpcao2(result.response[0].opcao2);
            setOpcao3(result.response[0].opcao3);
            setOpcao4(result.response[0].opca4);
            setOpcaoCerta(result.response[0].opcaoCerta);
            setidnivel(result.response[0].id_nivel);
            console.log(pergunta);
        })
        
    },[id]);

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            "id_pergunta": id,
            "pergunta": pergunta,
            "opcao1": opcao1,
            "opcao2": opcao2,
            "opcao3": opcao3,
            "opca4": opcao4,
            "opcaoCerta": opcaoCerta,
            "id_nivel": idnivel,
           
        }
        fetch("http://localhost:3001/perguntas/", {
            method: "PATCH",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then((result)=>{
            if(result['mensagem'] =="Adivinha alterada com sucesso"){
                window.location = "/admin/quiz";
            }
        });
    }

    const [pergunta, setPergunta] = useState("");
    const [opcao1, setOpcao1] = useState("");
    const [opcao2, setOpcao2] = useState("");
    const [opcao3, setOpcao3] = useState("");
    const [opcao4, setOpcao4] = useState("");
    const [opcaoCerta, setOpcaoCerta] = useState("");
    const [idnivel, setidnivel] = useState(0);
   
    return (
        <div>
            <AppBarUser/>
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Pergunta
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        
                        name="pergunta"
                        variant="outlined"
                        required
                        fullWidth
                        id="pergunta"
                        label="Pergunta"
                        value={pergunta}
                        onChange={(e)=>{
                            setPergunta(e.target.value);
                        }}
                        autoFocus>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="opcao1"
                        variant="outlined"
                        required
                        fullWidth
                        id="opcao1"
                        label="Opcao 1"
                        value={opcao1}
                        onChange={(e)=>{
                            setOpcao1(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="opcao2"
                        variant="outlined"
                        required
                        fullWidth
                        id="opcao2"
                        label="Opcao 2"
                        value={opcao2}
                        onChange={(e)=>{
                            setOpcao2(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="opcao3"
                        variant="outlined"
                        required
                        fullWidth
                        id="opcao3"
                        label="Opcao 3"
                        value={opcao3}
                        onChange={(e)=>{
                            setOpcao3(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="opcao4"
                        variant="outlined"
                        required
                        fullWidth
                        id="opcao4"
                        label="Opcao 4"
                        value={opcao4}
                        onChange={(e)=>{
                            setOpcao4(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="opcaoCerta"
                        variant="outlined"
                        required
                        fullWidth
                        id="opcaoCerta"
                        label="Opcao Certa"
                        value={opcaoCerta}
                        onChange={(e)=>{
                            setOpcaoCerta(e.target.value);
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
                   
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Update</Button>
            </form>
            
        </div>
        </div>
    )
}

export default Quizupdate;
