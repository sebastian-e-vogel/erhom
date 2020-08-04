import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FormViajes from "../formViajes";
import TablaViajes from "../viajes";
import NavBar from "../navBar";
import MenuLeft from "../menuLeft";
import { makeStyles, Hidden } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
}));

const Container = () => {
  const [viajes, setViajes] = useState([]);
  const [open, setOpen] = useState(false);
  const [infoEditable, setInfoEditable] = useState({});
  const [updateDeliveries, setUpdateDeliveries] = useState(false);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/v1/getAllDeliverys";
    const getAllDeliveries = async (url) => {
      const response = await fetch(url);
      const deliveries = await response.json();
      setViajes(deliveries.data);
    };
    getAllDeliveries(apiUrl);
  }, [updateDeliveries]);

  const handleNewDelivery = (delivery) => {
    let deliveryPriceTypeNumber = {
      ...delivery,
      precio: parseInt(delivery.precio),
    };
    let apiUrl = "http://localhost:4000/v1/newDelivery";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...deliveryPriceTypeNumber }),
    });
    setUpdateDeliveries(!updateDeliveries);
  };


  const handleEdit = (info) => {
    setInfoEditable(info);
    console.log(info);
  };

  const classes = styles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavBar openMenu={() => setOpen(!open)} />
        <Hidden xsDown>
          <MenuLeft variant="permanent" open={true} />
        </Hidden>
        <Hidden smUp>
          <MenuLeft
            variant="temporary"
            open={open}
            onClose={() => setOpen(!open)}
          />
        </Hidden>

        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Route path="/viajes">
              <FormViajes
                data={(newDelivery) => handleNewDelivery(newDelivery)} title="Ingresar Nuevo Viaje"
              />
            </Route>
            <Route path="/edit">
              <FormViajes data={infoEditable} editable={true} title= "Editar Viaje"/>
            </Route>
            <Route path="/consultas">
              <TablaViajes viajes={viajes} edit={handleEdit} />
            </Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Container;
