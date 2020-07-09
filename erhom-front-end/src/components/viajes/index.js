import React from "react";
import './styles.css'

function TablaViajes(props) {
    let totalViajes = props.viajes.reduce((acc, obj) => {
        return acc + parseInt(obj.precio)}, 0 ); 


let cobradoFletero = props.viajes.reduce((acumulador, obj) => {
        if (obj.viajeCobrado){ return acumulador + parseInt(obj.precio)}
        else{ return acumulador + 0}
        
        }, 0)

let comisionFacu = 20
let totalFletero = totalViajes - (totalViajes * comisionFacu) / 100
let totalFacu= (totalViajes * comisionFacu) / 100
        
  return (
    <div className="tablaViajes">
      {props.viajes.map((viaje) => {
        return <div className='tabla'>

        <p>Fecha: {viaje.fecha} </p>
        <p>Fletero: {viaje.fleteroId} </p>
        <p>Cobro el viaje?: {viaje.viajeCobrado ? "si" : "no"} </p>
        <p>Cliente: {viaje.nombreCliente} </p>
        <p>Desde: {viaje.direccionDesde} </p>
        <p>Hasta: {viaje.direccionHasta} </p>
        <p>Valor: {viaje.precio} </p>
        <p>comentarios: {viaje.comentarios} </p>
        </div>;
      })}
      
    Total Viajes: ${totalViajes} <br /><br />
    Cobrado por fletero: ${cobradoFletero} <br /><br />
    Comision Facu: {comisionFacu} %<br /><br />
    Total Facu: ${ totalFacu }<br /><br />
    Total Fletero: ${totalFletero}<br /><br />
    fletero debe: ${ cobradoFletero > totalFletero ?  (cobradoFletero -  totalFletero) : 0}<br /><br />
    facu debe: ${ cobradoFletero < totalFletero ?  (totalFletero - cobradoFletero ) : 0}<br /><br />

    </div>
  );
}

export default TablaViajes;
