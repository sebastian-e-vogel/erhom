/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fleteros from "../../data/fleteros"

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

const initialState = {
  fleteroName: "",
  _idCliente: "",
  nombreCliente: "",
  direccionDesde: "",
  direccionHasta: "",
  fecha: "",
  precio: "",
  comentarios: "",
  viajeCobrado: false,
};

const FormViajes =  props  => {

  //destructuring props 
  const {deliveryToEdit,
  editable,
  title,
  clients,
  handleDeliveryEdited,
  setNewDelivery} = props

  const [viaje, setViaje] = useState(initialState);


  //Setting in inputs data to edit
  
  useEffect(() => {
    editable
      ? setViaje({
          _idCliente: deliveryToEdit._idCliente._id,
          nombreCliente: deliveryToEdit._idCliente.nombreCliente,
          direccionDesde: deliveryToEdit.direccionDesde,
          direccionHasta: deliveryToEdit.direccionHasta,
          precio: deliveryToEdit.precio,
          fleteroName: deliveryToEdit.fleteroName,
          fecha: deliveryToEdit.fecha,
          comentarios: deliveryToEdit.comentarios,
          viajeCobrado: deliveryToEdit.viajeCobrado,
        })
      : setViaje({ ...viaje });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    editable ? handleDeliveryEdited(viaje) : setNewDelivery(viaje);
    setViaje({...initialState});
  };

  const handleChange = (e) => {
    setViaje({ ...viaje, [e.target.name]: e.target.value });
  };

  const handleChangeClient = (e) => {
    let foundClient = clients.find((client)=> client._id === e.target.value) 
    let nombreCliente = foundClient.nombreCliente
    setViaje({ ...viaje, [e.target.name]: e.target.value, nombreCliente });
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
    <form className={classes.layout} onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        {title}
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
            name="fleteroName"
            fullWidth
            value={viaje.fleteroName}
            onChange={handleChange}
            required
          >
            <option></option>
            {fleteros.map((fletero) => (
              <option key={fletero.id} value={fletero.name}>
                {fletero.name}
              </option>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12}>
          <Select
            native
            name="_idCliente"
            // value={viaje.nombreCliente}
            onChange={handleChangeClient}
            required
          >
            <option></option>
            {clients.map((client) => (
              <option key={client._id} value={client._id}>
                {client.nombreCliente}
              </option>
            ))}
          </Select>
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
            {editable ? "Editar" : "Enviar"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormViajes;
