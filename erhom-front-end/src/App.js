import React, { useState } from "react";
import "./App.css";
import FormViajes from "./components/formViajes";
import TablaViajes from "./components/viajes";

function App() {
  const [viajes, setViajes] = useState([]);

  const handleData = (viaje) => {
    setViajes([...viajes, viaje]);
  };

  return (
    <div className="App">
      <h1> Ingresar viaje </h1>
      <FormViajes data={(viaje) => handleData(viaje)} />
      <TablaViajes viajes={viajes}/>
    </div>
  );
}

export default App;
