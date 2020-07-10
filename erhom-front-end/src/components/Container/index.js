import React, { useState } from "react";
import FormViajes from "../formViajes";
import TablaViajes from "../viajes";
import NavBar from '../navBar'


import {
    makeStyles
} from '@material-ui/core'

const styles = makeStyles(theme =>({
    root:{
    display: 'flex',
}
}))

const Container = () =>{

 const [viajes, setViajes] = useState([]);

  const handleData = (viaje) => {
    setViajes([...viajes, viaje]);
  };

  const classes = styles()
    return (
        <div className={classes.root}>
        <NavBar />
       <div className='container-body'>
       
    <FormViajes data={(viaje) => handleData(viaje)} />
      <TablaViajes viajes={viajes}/>

       </div>
        </div>
    )
}

export default Container;