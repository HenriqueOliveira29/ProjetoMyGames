import React,{useState} from 'react'
import AppBarAdmin from './AppBarAdmin'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
      margin: theme.spacing(1),
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


const Adivinhacreate = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
          adivinha: adivinha,
          resposta: resposta,
          pontosXp: pontosXp,
          moedasGanhas: moedasGanhas,
          id_nivel: idnivel,
        };
        fetch("http://localhost:3001/adivinhas/insereAdivinha", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result["status"] === "ok") {
                window.location.href = "/admin/adivinha";
              }
          });
        
      };

     

    const [adivinha, setadivinha] = useState("");
    const [resposta, setresposta] = useState("");
    const [pontosXp, setpontosXp] = useState(0);
    const [moedasGanhas, setmoedasGanhas] = useState(0);
    const [idnivel, setidnivel] = useState(0);


    return (
        <div>
            <AppBarAdmin></AppBarAdmin>
            <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Adivinha
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="adivinha"
                name="adivinha"
                variant="outlined"
                required
                fullWidth
                id="adivinha"
                label="Adivinha"
                onChange={(e) => setadivinha(e.target.value)}
                autoFocus
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="resposta"
                name="resposta"
                variant="outlined"
                required
                fullWidth
                id="resposta"
                label="Resposta"
                onChange={(e) => setresposta(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='number'
                autoComplete="pontosXp"
                name="pontosXp"
                variant="outlined"
                required
                fullWidth
                id="pontosXp"
                label="Pontos de experiencia"
                onChange={(e) => setpontosXp(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='number'
                autoComplete="moedasGanhas"
                name="moedasGanhas"
                variant="outlined"
                required
                fullWidth
                id="meodasGanhas"
                label="moedas ganhas"
                onChange={(e) => setmoedasGanhas(e.target.value)}
              ></TextField>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
        </div>
    )
}

export default Adivinhacreate
