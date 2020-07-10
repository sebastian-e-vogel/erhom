import React, { useState } from "react";
import FormViajes from "../formViajes";
import TablaViajes from "../viajes";
import NavBar from "../navBar";
import MenuLeft from '../menuLeft'
import { makeStyles } from "@material-ui/core";

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

  const handleData = (viaje) => {
    setViajes([...viajes, viaje]);
  };

  const classes = styles();
  return (
    <div className={classes.root}>
      <NavBar />
      <MenuLeft/>
      <div className={classes.content}>
         <div className={classes.toolbar}>
        <FormViajes data={(viaje) => handleData(viaje)} />
        <TablaViajes viajes={viajes} />
         </div>
      </div>
    </div>
  );
};

export default Container;
