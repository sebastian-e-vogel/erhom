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

  useEffect(() => {
    const apiUrl = "http://localhost:4000/v1/getAllDeliverys";
    const getAllDeliveries = async (url) => {
      const response = await fetch(url);
      const deliveries = await response.json();
      setViajes(deliveries.data);
    };
    getAllDeliveries(apiUrl);
  }, []);

  const handleData = (delivery) => {
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
    setViajes([...viajes, deliveryPriceTypeNumber]);
  };

  const handlePrueba = (info) => {
    setInfoEditable(info);
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
              <FormViajes data={(viaje) => handleData(viaje)} />
            </Route>
            <Route path="/edit">
              <FormViajes data={infoEditable} editable={true} />
            </Route>
            <Route path="/consultas">
              <TablaViajes viajes={viajes} edit={handlePrueba} />
            </Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Container;
