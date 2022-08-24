import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Contador = React.memo(({ sumador, name, numero = 5 }) => {
    console.log("render contador")
    return <Button onClick={() => { sumador(numero) }} variant="contained" >{name}</Button>
})

export default function PruebaUseCallbackUseMemo(props) {

    const [reset, setReset] = React.useState(0);
    const [valor, setValor] = React.useState(0);


    // console.log("render RetoMemo1")

    const sumador = React.useCallback((num) => {
        setValor(value => value + num)
    }, [setValor])

    const handleReset = () => {
        setReset(reset + 1)
    }
    return <Grid container spacing={0}>
        <Grid item xs>
            <Contador name="Contador 1" sumador={sumador} />
            <Button variant="outlined" onClick={handleReset}>RESET</Button>
            <Typography gutterBottom variant="body2">{valor}</Typography>
        </Grid>
    </Grid>
}
