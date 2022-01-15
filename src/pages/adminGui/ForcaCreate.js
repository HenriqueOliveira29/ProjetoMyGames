import React,{useState} from 'react'
import AppBarAdmin from './AppBarAdmin'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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


const Forcacreate = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
          palavra: palavra,
          pista: pista,
          pontosXpGanhos: pontosXpGanhos,
          moedasGanhas: moedasGanhas,
          id_nivel: idnivel,
          id_tema: idtema,
        };
        fetch("http://localhost:3001/forcas", {
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
                window.location.href = "/admin/forca";
              }
          });
        
      };
    const [palavra, setpalavra] = useState("");
    const [pista, setpista] = useState("");
    const [pontosXpGanhos, setpontosXpGanhos] = useState(0);
    const [moedasGanhas, setmoedasGanhas] = useState(0);
    const [idnivel, setidnivel] = useState(0);
    const [idtema, setidtema] = useState(0);

    return (
        <div>
             <AppBarAdmin></AppBarAdmin>
             <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Forca
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="palavra"
                name="palavra"
                variant="outlined"
                required
                fullWidth
                id="palavra"
                label="Palavra"
                onChange={(e) => setpalavra(e.target.value)}
                autoFocus
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="pista"
                name="pista"
                variant="outlined"
                required
                fullWidth
                id="pista"
                label="Pista"
                onChange={(e) => setpista(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='number'
                autoComplete="pontosXp"
                name="pontosXpGanhos"
                variant="outlined"
                required
                fullWidth
                id="pontosXpGanhos"
                label="Pontos de experiencia"
                onChange={(e) => setpontosXpGanhos(e.target.value)}
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
              <TextField
                type = 'number'
                autoComplete="id_nivel"
                name="id_nivel"
                variant="outlined"
                fullWidth
                id="id_nivel"
                label="Nivel"
                onChange={(e) => setidnivel(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type = 'number'
                autoComplete="id_tema"
                name="id_tema"
                variant="outlined"
                fullWidth
                id="id_tema"
                label="Tema"
                onChange={(e) => setidtema(e.target.value)}
              ></TextField>
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

export default Forcacreate
