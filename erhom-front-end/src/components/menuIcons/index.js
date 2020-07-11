import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import SportsMotorsportsIcon from "@material-ui/icons/SportsMotorsports";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = makeStyles({
  linkRouter: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const MenuIcons = (props) => {
  const classes = useStyles();
  return (
    <List component="nav">
      <NavLink to="/viajes" className={classes.linkRouter}>
        <ListItem button onClick={props.onClose}>
          <ListItemIcon>
            <MotorcycleIcon />
          </ListItemIcon>
          <ListItemText primary="Nuevo Viaje" />
        </ListItem>
      </NavLink>

      <NavLink to="/consultas" className={classes.linkRouter}>
        <ListItem button onClick={props.onClose}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Consultas" />
        </ListItem>
      </NavLink>

      <NavLink to="/fleteros" className={classes.linkRouter}>
        <ListItem button onClick={props.onClose}>
          <ListItemIcon>
            <SportsMotorsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Nuevo Fletero" />
        </ListItem>
      </NavLink>

      <Divider />
    </List>
  );
};

export default MenuIcons;
