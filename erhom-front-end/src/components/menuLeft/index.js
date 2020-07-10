import React from "react";
import MenuIcons from "../menuIcons";

import { Drawer, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const MenuLeft = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      classes={{ paper: classes.drawerPaper }}
      onClose={ props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
        <MenuIcons />
    </Drawer>
  );
};
export default MenuLeft;
