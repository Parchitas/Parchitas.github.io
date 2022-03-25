import React from 'react';
import Ciudad from "../Ciudad/Ciudad";
import info from "./CiudadesLista.json";
import { Grid } from '@material-ui/core';

function CiudadesLista({ ciudades }) {

    //const { ciudades } = info;
    //console.log(ciudades[0].ambiente)

    return (<ul><Grid item
  container
        direction="column"
        columns={{xs: 4}}
  justifyContent="space-between"
        alignItems="center"
        >
        <Grid item >
        {ciudades.map(ciudad => <Ciudad key={ciudad.id} ciudad={ciudad} />)}
    
        </Grid></Grid></ul>);
}

export default CiudadesLista;