import React from "react";
import "./styles.css";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import CollapsibleTable from './tablaViajes'

function TablaViajes(props) {
  let totalViajes = props.viajes.reduce((acc, obj) => {
    return acc + parseInt(obj.precio);
  }, 0);

  let cobradoFletero = props.viajes.reduce((acumulador, obj) => {
    if (obj.viajeCobrado) {
      return acumulador + parseInt(obj.precio);
    } else {
      return acumulador + 0;
    }
  }, 0);

  let comisionFacu = 20;
  let totalFletero = totalViajes - (totalViajes * comisionFacu) / 100;
  let totalFacu = (totalViajes * comisionFacu) / 100;

  return (
    <div className="grid-freight">
      <div className="deliverys-grid">
     <CollapsibleTable viajes={props.viajes}/>
     </div>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography >
           {`Total Viajes: $${totalViajes}` }
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
           {`Cobrado por fletero: $${cobradoFletero}` }
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
           {`Comision Facu: ${comisionFacu}%` }
          </Typography>
        </Grid>
                <Grid item xs={12} md={4}>
        <Typography>
           {`Facu debe: $${cobradoFletero < totalFletero ? totalFletero - cobradoFletero : 0}` }
          </Typography>
         
        </Grid>
        <Grid item xs={12} md={6}>
           <Typography>
           {`Fletero debe: $${cobradoFletero > totalFletero ? cobradoFletero - totalFletero : 0}` }
          </Typography>
        </Grid>
          <Grid item xs={12} md={4} >
          <Typography >
           {`Total Facu: $${totalFacu}` }
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
           {`Total Fletero: $${totalFletero}` }
          </Typography>
        </Grid>  



        </Grid>

       
    </div>
  );
}

export default TablaViajes;
