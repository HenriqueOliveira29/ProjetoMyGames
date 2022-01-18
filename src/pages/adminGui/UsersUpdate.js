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

const UsersUpdate = () => {
    const classes = useStyles();
    const {email} = useParams();
    
    useEffect(()=>{
        fetch("http://localhost:3001/jogador/"+email)
        .then(res=>res.json())
        .then((result)=>{
            setnickname(result.response[0].nickname);
            setxp(result.response[0].xp);
            setmoedas(result.response[0].moedas);
            setrole(result.response[0].role);
        })
        
    },[email]);

    const [nickname, setnickname] = useState("");
    const [xp, setxp] = useState(0);
    const [moedas, setmoedas] = useState(0);
    const [role, setrole] = useState(0);
    
    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            "Email": email,
            "nickname": nickname,
            "xp": xp,
            "moedas": moedas,
            "role": role,
           
        }
        console.log(data);
        fetch("http://localhost:3001/jogador/changerole", {
            method: "PATCH",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then((result)=>{
            if(result['mensagem'] =="role atualizado com sucesso"){
                window.location = "/admin/users"
            }
        });
    }

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
                        name="nickname"
                        variant="outlined"
                        required
                        fullWidth
                        id="nickname"
                        label="nickname"
                        value={nickname}
                        onChange={(e)=>{
                            setnickname(e.target.value);
                        }}
                        autoFocus>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        type='number'
                        name="xp"
                        variant="outlined"
                        required
                        fullWidth
                        id="xp"
                        label="xp"
                        value={xp}
                        onChange={(e)=>{
                            setxp(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        type="number"
                        name="moedas"
                        variant="outlined"
                        required
                        fullWidth
                        id="moedas"
                        label="moedas"
                        value={moedas}
                        onChange={(e)=>{
                            setmoedas(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select
                        
                        name="role"
                        variant="outlined"
                        required
                        fullWidth
                        id="role"
                        label="role"
                        value={role}
                        onChange={(e)=>{
                            setrole(e.target.value);
                        }}
                        >
                        <MenuItem value="user">
                            <em>user</em>
                        </MenuItem>
                        <MenuItem value="admin">
                            <em>admin</em>
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

export default UsersUpdate
