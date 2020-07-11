import React from "react";
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

const MenuIcons = (props) => {
  return (
    <List component="nav">
      <ListItem button onClick={props.onClose}>
        <ListItemIcon>
          <MotorcycleIcon />
        </ListItemIcon>
        <ListItemText primary="Nuevo Viaje" />
      </ListItem>
      <ListItem button onClick={props.onClose}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Listados" />
      </ListItem>

      <ListItem button onClick={props.onClose}>
        <ListItemIcon>
          <SportsMotorsportsIcon />
        </ListItemIcon>
        <ListItemText primary="Nuevo Fletero" />
      </ListItem>
      <Divider />
    </List>
  );
};

export default MenuIcons;
