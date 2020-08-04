import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import Row from "./row";

const TableDeliveries = ({deliveries, edit, handleDeleteDelivery }) => {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Cliente</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Fletero</TableCell>
            <TableCell align="right">Cobro?</TableCell>
            <TableCell align="right">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveries.map((delivery) => (
            <Row key={delivery._id} viaje={delivery} edit={edit} handleDeleteDelivery={(deliveryId)=>handleDeleteDelivery(deliveryId)}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDeliveries;
