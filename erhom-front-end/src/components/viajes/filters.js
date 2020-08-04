import React from "react";

import {
  Grid,
  TextField,
  Select,
} from "@material-ui/core";
const Filters = ({applyFilters}) => {

const fleteros = [
  { id: 1, name: "nacho" },
  { id: 2, name: "pepe" },
];


const handleChange = (e) =>{
    applyFilters(e.target.value, e.target.name)
}

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <TextField
          type="date"
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
          onChange={handleChange}
          required
        >
          <option></option>
          {fleteros.map((fletero) => (
            <option value={fletero.name}>{fletero.name}</option>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default Filters;
