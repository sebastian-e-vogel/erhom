import React, { useState } from "react";

const fleteros = [
  { id: 1, name: "nacho", comision: 50 },
  { id: 2, name: "fletero2", comision: 10 },
  { id: 3, name: "fletero3", comision: 25 },
];

function FormViajes(props) {
  const [viaje, setViaje] = useState({
    fleteroId: "",
    nombreCliente: "",
    direccionDesde: "",
    direccionHasta: "",
    fecha: "",
    precio: "",
    comentarios: "",
    viajeCobrado: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.data(viaje);
  };

  const handleChange = (e) => {
    setViaje({ ...viaje, [e.target.name]: e.target.value });
  };

  const handleChangeCheckbox = (e) => {
    setViaje({ ...viaje, viajeCobrado: !viaje.viajeCobrado });
  };

  return (
    <div className="formViajes">
      <form onSubmit={handleSubmit}>
        <select name="fleteroId" onChange={handleChange} 
        required
        >
          {fleteros.map((fletero) => {
            return <option value={fletero.id}>{fletero.name}</option>;
          })}
        </select>
        <input type="date" name="fecha" onChange={handleChange} />
        <input
          placeholder="Nombre del Cliente"
          onChange={handleChange}
          name="nombreCliente"
          required
        />
        <p>
          Se cobro el viaje?
          <input type="checkbox" onChange={handleChangeCheckbox} />
        </p>
        <p>
          Dirección del viaje
          <input
            placeholder="Desde"
            name="direccionDesde"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Hasta"
            onChange={handleChange}
            name="direccionHasta"
            required
          />
          <input
            type="number"
            name="precio"
            placeholder="Monto del viaje"
            onChange={handleChange}
            required
          />
        </p>
        <textarea
          placeholder="comentarios"
          onChange={handleChange}
          name="comentarios"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default FormViajes;
