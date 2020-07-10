import React, { useState } from "react";
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

  const handleData = (viaje) => {
    setViajes([...viajes, viaje]);
  };

  const classes = styles();
  return (
    <div className={classes.root}>
      <NavBar openMenu={()=> setOpen(!open)}/>
      <Hidden xsDown>
        <MenuLeft 
        variant="permanent" 
        open={true} 
        />
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
          <FormViajes data={(viaje) => handleData(viaje)} />
          <TablaViajes viajes={viajes} />
        </div>
      </div>
    </div>
  );
};

export default Container;
