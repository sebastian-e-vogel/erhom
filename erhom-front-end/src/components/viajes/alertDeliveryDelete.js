import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  IconButton,
  DialogActions,
  DialogTitle,
} from "@material-ui/core/";

const useButtonStyles = makeStyles({
  button: {
    height: 30,
  },
});

const AlertDeliveryDelete = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const classes = useButtonStyles();

  return (
    <IconButton size="small">
      <DeleteIcon onClick={handleClickOpen} className={classes.button} />
      <Dialog open={open} onClose={handleClickOpen}>
        <DialogTitle>Estas seguro de eliminar el viaje?</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
          <Button
            onClick={handleClickOpen}
            color="primary"
            variant="contained"
            autoFocus
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </IconButton>
  );
};

export default AlertDeliveryDelete;
