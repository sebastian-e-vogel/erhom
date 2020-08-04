/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  TextField,
  FormControlLabel,
  Button,
  Select,
  Input,
  Checkbox,
  Typography,
} from "@material-ui/core";

const fleteros = [
  { id: 1, name: "nacho", comision: 50 },
  { id: 2, name: "pepe", comision: 30 },
];

function FormViajes(props) {
  const [viaje, setViaje] = useState({
    fleteroId: "",
    nombreCliente: "",
    direccionDesde: "",
    direccionHasta: "",
    fecha: "",
    precio: "",
    comentarios: "",
    viajeCobrado: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.data(viaje);
    setViaje({
      ...viaje,
      nombreCliente: "",
      direccionDesde: "",
      direccionHasta: "",
      comentarios: "",
      viajeCobrado: false,
    });
  };


//Setting in inputs data to edit
  useEffect(() => {
    props.editable
      ? setViaje({
          nombreCliente: props.data.nombreCliente,
          direccionDesde: props.data.direccionDesde,
          direccionHasta: props.data.direccionHasta,
          precio: props.data.precio,
          fleteroId: props.data.fleteroId,
          fecha: props.data.fecha,
          comentarios: props.data.comentarios,
          viajeCobrado: props.data.viajeCobrado,
        })
      : setViaje({ ...viaje });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setViaje({ ...viaje, [e.target.name]: e.target.value });
  };

  const handleChangeCheckbox = (e) => {
    setViaje({ ...viaje, viajeCobrado: !viaje.viajeCobrado });
  };

  const useStyles = makeStyles((theme) => ({
    layout: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    },
  }));

  const classes = useStyles();

  return (
    <form
      className={classes.layout}
      onSubmit={props.editable ? handleEdit : handleSubmit}
    >
      <Typography variant="h6" gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <TextField
            type="date"
            value={viaje.fecha}
            name="fecha"
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Select
            native
            name="fleteroId"
            fullWidth
            value={viaje.fleteroId}
            onChange={handleChange}
            required
          >
            <option></option>
            {fleteros.map((fletero) =>  <option value={fletero.name}>{fletero.name}</option>)}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            name="nombreCliente"
            required
            value={viaje.nombreCliente}
            label="Nombre del Cliente"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="direccionDesde"
            onChange={handleChange}
            value={viaje.direccionDesde}
            required
            label="Desde"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="direccionHasta"
            onChange={handleChange}
            value={viaje.direccionHasta}
            required
            label="Hasta"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="number"
            name="precio"
            onChange={handleChange}
            value={viaje.precio}
            required
            fullWidth
            label="Precio"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={viaje.viajeCobrado}
                onChange={handleChangeCheckbox}
              />
            }
            label="Cobro el viaje?"
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            multiline
            onChange={handleChange}
            value={viaje.comentarios}
            name="comentarios"
            fullWidth
            label="Comentarios"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" color="primary">
            {props.editable ? "Editar" : "Enviar"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormViajes;
