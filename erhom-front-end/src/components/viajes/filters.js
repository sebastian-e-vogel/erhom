import React from "react";
import fleteros from "../../data/fleteros"
import { Grid, TextField, Select } from "@material-ui/core";

const Filters = ({ applyFilters, clients }) => {
  const handleChange = (e) => {
    applyFilters(e.target.value, e.target.name);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Select
          native
          name="_idCliente"
          onChange={handleChange}
          required
          fullWidth
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
          type="date"
          name="fecha"
          onChange={handleChange}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Select
          native
          name="fleteroName"
          fullWidth
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
    </Grid>
  );
};

export default Filters;
