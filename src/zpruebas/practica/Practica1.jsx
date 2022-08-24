import React from 'react'
import { sumar, sumar2, sumar4 } from './Metodo1'
import Popover from '@mui/material/Popover';
import { Grid } from '@mui/material';
export default function Practica1() {


    const pruebaParamsFn2 = (e) => {
        console.log("--START---");
        sumar({ key: e }, e)
        sumar(e, { key: e })
        sumar()
        console.log("------");
        sumar2({ key2: e }, { key3: "asd" })
        sumar2(e, { key2: "narco" })
        sumar2({ key: 666 })
        console.log("---END---");
    }

    //Los props solo funcionan en components (aquellas funciones que retornan html)
    const pruebaParamsFn1 = (p) => {
        sumar4(4, 6)
        sumar4({ name: "name23" }, { name2: "marc" })
        sumar4({ key: "name23" }, { key2: "kettt" })
    }
    return (
        <React.Fragment>
            <div>
                <button onClick={() => pruebaParamsFn1(5)}>Prueba - parametros Funcion1</button>
                <button onClick={() => pruebaParamsFn2(5)}>Prueba - parametros Funcion2</button>
            </div>

            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Popover
                        open={true}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        sx={{ maxWidth: '300px' }}
                    >
                    </Popover>
                </Grid>

            </Grid>



        </React.Fragment>
    )
}
