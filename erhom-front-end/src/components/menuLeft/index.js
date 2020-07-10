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

const MenuLeft = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbar} />
      <Divider />
        <MenuIcons />
    </Drawer>
  );
};
export default MenuLeft;
