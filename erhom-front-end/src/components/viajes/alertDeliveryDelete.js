import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Button,
  Dialog,
  IconButton,
  DialogActions,
  DialogTitle,
} from "@material-ui/core/";



const AlertDeliveryDelete = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleDeleteDelivery = () =>{
        setOpen(!open);
         props.deleteDelivery()

  }

  return (
    <IconButton size="small" onClick={handleClickOpen}>
      <DeleteIcon />
      <Dialog open={open} onClose={handleClickOpen}>
        <DialogTitle>Estas seguro de eliminar el viaje?</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDeleteDelivery}
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
