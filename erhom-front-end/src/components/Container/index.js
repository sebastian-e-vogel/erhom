import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FormViajes from "../formViajes";
import TablaViajes from "../viajes";
import NavBar from "../navBar";
import MenuLeft from "../menuLeft";
import NuevoCliente from "../nuevoCliente";
import { makeStyles, Hidden } from "@material-ui/core";
import { Home } from "../HomePage";
import { useFetchGetData } from "../../hooks/useFetchGetData";
import { useFetch } from "../../hooks/useFetch";
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
  const [newGetFetch, setnewGetFetch] = useState(false);
  const [newFetch, setNewFetch] = useState({
    url: "",
    methodHTTP: "",
    dataToFetch: {},
  });

  const urlBase = "http://localhost:4000/v1";

  const [allDeliveries] = useFetchGetData(
    `${urlBase}/getAllDeliveries`,
    newGetFetch
  );
  const [allClients] = useFetchGetData(
    `${urlBase}/getAllClients`,
    newGetFetch
  );
  const { response, error, isLoading, refetch } = useFetch(newFetch);

  useEffect(() => {
    setViajes(allDeliveries.data);
  }, [allDeliveries]);

  useEffect(() => {
    setClientes(allClients.data);
  }, [allClients]);

  const handleNewDelivery = async (delivery) => {
    let url = `${urlBase}/newDelivery`;
    let dataToFetch = {
      ...delivery,
      precio: parseInt(delivery.precio),
    };
    await setNewFetch({ dataToFetch, url, methodHTTP: "POST" });
    setnewGetFetch(!newGetFetch);
  };

  const handleEdit = (delivery) => {
    let fecha = delivery.fecha.substr(0, 10);
    delivery = { ...delivery, fecha };
    setDeliveryToEdit(delivery);
  };

  const deleteDeliveryInDataBase = async (deliveryId) => {
    let url = `${urlBase}/deleteDelivery/${deliveryId}`;
    //is an async/await function, because needs wait the response before to execute useFetchGetData()
    await setNewFetch({ ...newFetch, url, methodHTTP: "DELETE" });
    setnewGetFetch(!newGetFetch);
  };

  const setDeliveryEdited = async (deliveryEdited) => {
    let dataToFetch = { ...deliveryToEdit, ...deliveryEdited };
    let url = `${urlBase}/updateDelivery/${dataToFetch._id}`;
    //is an async/await function, because needs wait the response before to execute useFetchGetData()
    await setNewFetch({ dataToFetch, url, methodHTTP: "PUT" });
    setnewGetFetch(!newGetFetch);
  };

  const addNewClient = async (newClient) => {
    let url = `${urlBase}/newClient`;
    await setNewFetch({ dataToFetch: newClient, url, methodHTTP: "POST" });
    setnewGetFetch(!newGetFetch);

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
