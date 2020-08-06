/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles({
  linkRouter: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const initialState = {
    nombreCliente: "",
    direccion: "",
  }

function NuevoCliente({handleNewClient}) {

  const [nuevoCliente, setNuevoCliente] = useState(initialState);
  const {nombreCliente, direccion} = nuevoCliente
  

  const handleChange = (e) => {
    setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    handleNewClient(nuevoCliente)
    setNuevoCliente(initialState)
  };

  const classes = useStyles();
  

  return (
    <form className={classes.layout} onSubmit={handleSubmit}>
     
      <Typography variant="h6" gutterBottom>
        Agregar nuevo cliente
      </Typography>
      <Grid container spacing={3}>

    
        <Grid item xs={12} md={4}>
          <TextField
            onChange={handleChange}
            name="nombreCliente"
            required
            value={nombreCliente}
            label="Nombre del Cliente"
            fullWidth
            
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            name="direccion"
            onChange={handleChange}
            value={direccion}
            required
            label="Direccion"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" color="primary">
            {"Enviar"}
          </Button>
        </Grid>
        </Grid>
    </form>
  );
}

export default NuevoCliente;
