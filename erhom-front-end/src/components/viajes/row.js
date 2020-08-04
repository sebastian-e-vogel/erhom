import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core/";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditIcon from "@material-ui/icons/Edit";
import AlertDeliveryDelete from "./alertDeliveryDelete";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  linkRouter: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const Row = (props) => {
  const { viaje, edit } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const handleEdit = () => {
    edit(viaje);
  };

  const changeFormatDate = (date) => {
    let fecha = new Date(date);
    let day = fecha.getDate() + 1;
    let month = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    let newDate = day + "/" + month + "/" + year;
    return newDate;
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <NavLink to="/edit" className={classes.linkRouter}>
              <IconButton size="small" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            </NavLink>
            <AlertDeliveryDelete deleteDelivery={()=> props.handleDeleteDelivery(viaje._id)}/>
          </TableCell>

          <TableCell component="th" scope="row">
            {viaje.nombreCliente}
          </TableCell>
          <TableCell align="right">{changeFormatDate(viaje.fecha)}</TableCell>
          <TableCell align="right">{viaje.fleteroId}</TableCell>
          <TableCell align="right">
            {viaje.viajeCobrado ? "si" : "no"}
          </TableCell>
          <TableCell align="right">${viaje.precio}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Información Extra
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Desde</TableCell>
                      <TableCell>Hasta</TableCell>
                      <TableCell align="center">Comentarios</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {viaje.direccionDesde}
                      </TableCell>
                      <TableCell>{viaje.direccionHasta}</TableCell>
                      <TableCell align="center">{viaje.comentarios}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </React.Fragment>
  );
};

export default Row;
