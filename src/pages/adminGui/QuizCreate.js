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

const Quizcreate = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
          pergunta: pergunta,
          opcao1: opcao1,
          opcao2: opcao2,
          opcao3: opcao3,
          opca4: opcao4,
          opcaoCerta: opcaoCerta,
          id_nivel: idnivel,
          
        };
        fetch("http://localhost:3001/perguntas", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result["mensagem"] === "Pergunta alterada com sucesso") {
                window.location = "/admin/quiz";
              }
          });
        
      };

      const [pergunta, setpergunta] = useState("");
    const [opcao1, setopcao1] = useState("");
    const [opcao2, setopcao2] = useState("");
    const [opcao3, setopcao3] = useState("");
    const [opcao4, setopcao4] = useState("");
    const [opcaoCerta, setopcaoCerta] = useState("");
    const [idnivel, setidnivel] = useState(0);
   
    return (
        <div>
            <AppBarAdmin></AppBarAdmin>
            <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Perguntas
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="pergunta"
                name="pergunta"
                variant="outlined"
                required
                fullWidth
                id="pergunta"
                label="Pergunta"
                onChange={(e) => setpergunta(e.target.value)}
                autoFocus
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="opcao1"
                name="opcao1"
                variant="outlined"
                required
                fullWidth
                id="opcao1"
                label="Opcao 1"
                onChange={(e) => setopcao1(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="opcao2"
                name="opcao2"
                variant="outlined"
                required
                fullWidth
                id="opcao2"
                label="Opcao 2"
                onChange={(e) => setopcao2(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="opcao3"
                name="opcao3"
                variant="outlined"
                required
                fullWidth
                id="opcao3"
                label="Opcao 3"
                onChange={(e) => setopcao3(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="opcao4"
                name="opcao4"
                variant="outlined"
                required
                fullWidth
                id="opca4"
                label="Opcao 4"
                onChange={(e) => setopcao4(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="opcaoCerta"
                name="opcaoCerta"
                variant="outlined"
                required
                fullWidth
                id="opcaoCerta"
                label="Opcao Certa"
                onChange={(e) => setopcaoCerta(e.target.value)}
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
                            <em>Muito facik</em>
                        </MenuItem>
                        <MenuItem value={2}>
                            <em>facil</em>
                        </MenuItem>
                        <MenuItem value={3}>
                            <em>medio</em>
                        </MenuItem>
                        <MenuItem value={4}>
                            <em>dificil</em>
                        </MenuItem>
                        <MenuItem value={5}>
                            <em>muito dificil</em>
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

export default Quizcreate
