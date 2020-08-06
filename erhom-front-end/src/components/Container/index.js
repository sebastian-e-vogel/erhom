import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FormViajes from "../formViajes";
import TablaViajes from "../viajes";
import NavBar from "../navBar";
import MenuLeft from "../menuLeft";
import NuevoCliente from "../nuevoCliente";
import { makeStyles, Hidden } from "@material-ui/core";
import {Home} from '../HomePage'

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
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const [deliveryToEdit, setDeliveryToEdit] = useState({});
  const [updateDeliveries, setUpdateDeliveries] = useState(false);
  const [updateClients, setUpdateClients] = useState(false);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/v1/getAllDeliveries";
    const getAllDeliveries = async (url) => {
      const response = await fetch(url);
      const deliveries = await response.json();
      setViajes(deliveries.data);
    };
    getAllDeliveries(apiUrl);
  }, [updateDeliveries]);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/v1/getAllClients";
    const getAllClients = async (url) => {
      const response = await fetch(url);
      const clientes = await response.json();
      setClientes(clientes.data);
    };
    getAllClients(apiUrl);
  }, [updateClients]);

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

  const handleEdit = (delivery) => {
   let fecha = delivery.fecha.substr(0, 10)
    delivery = {...delivery, fecha}
    setDeliveryToEdit(delivery);
  };

  const deleteDeliveryInDataBase = (deliveryId) => {
    let apiUrl = "http://localhost:4000/v1/deleteDelivery/" + deliveryId;
    fetch(apiUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setUpdateDeliveries(!updateDeliveries);
  };

  const setDeliveryEdited = (deliveryEdited) => {
    deliveryEdited = { ...deliveryToEdit, ...deliveryEdited };
    let apiUrl =
      "http://localhost:4000/v1/updateDelivery/" + deliveryEdited._id;
    fetch(apiUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...deliveryEdited }),
    });
    setUpdateDeliveries(!updateDeliveries);
  };

  const addNewClient = (newClient) => {
    let apiUrl = "http://localhost:4000/v1/newClient";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newClient }),
    });
    setUpdateClients(!updateClients);
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
            <Route exact path="/">
                  <Home />
            </Route>    
            
                    <Route path="/viajes">
              <FormViajes
                setNewDelivery={(newDelivery) => handleNewDelivery(newDelivery)}
                title="Ingresar Nuevo Viaje"
                clients={clientes}
              />
            </Route>
            <Route path="/edit">
              <FormViajes
                deliveryToEdit={deliveryToEdit}
                handleDeliveryEdited={setDeliveryEdited}
                clients={clientes}
                editable={true}
                title="Editar Viaje"
              />
            </Route>
            <Route path="/consultas">
              <TablaViajes
                viajes={viajes}
                edit={handleEdit}
                viajes={viajes}
                clients={clientes}
                handleDeleteDeliveryInDataBase={deleteDeliveryInDataBase}
              />
            </Route>
            <Route path="/nuevoCliente">
              <NuevoCliente handleNewClient={addNewClient} />
            </Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Container;
