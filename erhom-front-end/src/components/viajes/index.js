import React, { useState, useEffect } from "react";
import "./styles.css";
import { Grid, Typography } from "@material-ui/core";
import TableDeliveries from "./tablaViajes";
import Filters from "./filters";

function TablaViajes(props) {
  const filtersApplied = { fleteroName: "", fecha: "" };
  const [deliveriesFiltered, setDeliveriesFiltered] = useState([]);
  const [filterApplied, setFilterApplied] = useState(filtersApplied);

  let totalViajes = deliveriesFiltered.reduce((acc, obj) => {
    return acc + parseInt(obj.precio);
  }, 0);

  let cobradoFletero = deliveriesFiltered.reduce((acumulador, obj) => {
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
    let filterToSet = { ...filterApplied, [filterName]: filterValue };
    setFilterApplied(filterToSet);
  };

  const filterDeliveries = () => {
    const { viajes } = props;
    const { fleteroName, fecha } = filterApplied;

    let filterByFletero = [...viajes];
    if (fleteroName !== "") {
      filterByFletero = viajes.filter((viaje) => {
        return viaje.fleteroName === fleteroName;
      });
    }
    let filterByDate = [...filterByFletero];
    if (fecha !== "") {
      filterByDate = filterByDate.filter((viaje) => {
        return viaje.fecha.includes(fecha);
      });
    }

    setDeliveriesFiltered(filterByDate);
  };

  useEffect(filterDeliveries, [filterApplied]);

  const handleDeleteDelivery = (deliveryId) => {
    props.handleDeleteDeliveryInDataBase(deliveryId);
    let newListOfDeliveries = deleteDelivery(deliveryId);
    setDeliveriesFiltered(newListOfDeliveries);
  };
  const deleteDelivery = (deliveryId) => {
    return deliveriesFiltered.filter((delivery) => delivery._id !== deliveryId);
  };

  return (
    <div className="grid-freight">
      <Filters applyFilters={handleFilters} />
      <div className="deliverys-grid">
        <TableDeliveries
          handleDeleteDelivery={handleDeleteDelivery}
          deliveries={deliveriesFiltered}
          edit={props.edit}
        />
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
