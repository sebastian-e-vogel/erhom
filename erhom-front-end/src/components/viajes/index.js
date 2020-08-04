import React, { useState } from "react";
import "./styles.css";
import { Grid, Typography } from "@material-ui/core";
import CollapsibleTable from "./tablaViajes";
import Filters from "./filters";

function TablaViajes(props) {
  const [deliveriesFiltered, setDeliveriesFiltered] = useState([]);

  let totalViajes = props.viajes.reduce((acc, obj) => {
    return acc + parseInt(obj.precio);
  }, 0);

  let cobradoFletero = props.viajes.reduce((acumulador, obj) => {
    if (obj.viajeCobrado) {
      return acumulador + parseInt(obj.precio);
    } else {
      return acumulador + 0;
    }
  }, 0);

  let comisionFacu = 20;
  let totalFletero = totalViajes - (totalViajes * comisionFacu) / 100;
  let totalFacu = (totalViajes * comisionFacu) / 100;

  let handleFilters = (filterValue, filterName) => {
    const { viajes } = props;
      // cambiar esto por que esta mal estoy apuntando al mismo en memoria 
    let filterByFletero = [...viajes];
    if (filterValue != "" && filterName === "fleteroId") {
      filterByFletero = viajes.filter((viaje) => {
        return viaje.fleteroId === filterValue;
      });
    }

    let filterByDate = filterByFletero.filter((viaje) => {
      return viaje.fecha.includes(filterValue);
    });

    console.log('antes de setear', filterByDate)

    setDeliveriesFiltered(filterByDate)

  };
console.log(deliveriesFiltered)
  return (
    <div className="grid-freight">
      <Filters applyFilters={handleFilters} />
      <div className="deliverys-grid">
        <CollapsibleTable viajes={deliveriesFiltered.length > 0 ? deliveriesFiltered : props.viajes} edit={props.edit} />
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography>{`Total Viajes: $${totalViajes}`}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>{`Cobrado por fletero: $${cobradoFletero}`}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>{`Comision Facu: ${comisionFacu}%`}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
            {`Facu debe: $${
              cobradoFletero < totalFletero ? totalFletero - cobradoFletero : 0
            }`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            {`Fletero debe: $${
              cobradoFletero > totalFletero ? cobradoFletero - totalFletero : 0
            }`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>{`Total Facu: $${totalFacu}`}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>{`Total Fletero: $${totalFletero}`}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default TablaViajes;
