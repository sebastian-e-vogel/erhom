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

const CollapsibleTable = (props) => {
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
          {props.viajes.map((viaje) => (
            <Row viaje={viaje} edit={props.edit}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
