import { Button, Grid, Box, Typography } from '@mui/material';
import React from 'react'

const ComponenteHijo = React.memo(({ sumar }) => {
    console.log("RENDER - CHILD React.memo");
    const sumador = () => {
        sumar()
    }
    return (
        <Button onClick={() => sumador()} variant="outlined">INCREMENT NUM</Button>
    )
})

export default function ReactUseCallback() {
    const [numero, setnumero] = React.useState(0);
    const [numero2, setnumero2] = React.useState(0);

    const sumador = React.useCallback(() => {
        setnumero(item => item + 1)
    }, [setnumero])



    // colocar async no funciona con useMemo
    const getData = (num) => {
        for (let i = 0; i < num; i++) {
            console.log("call render");
        }
        return `${num}`
    }

    const getDataTxt = React.useMemo(() => getData(numero2), [numero2])


    const sumarNumero2 = () => {
        setnumero2(numero2 + 1)
    }

    const memoRenderElement = React.useMemo(() => {
        console.log("USE-MEMO")
        return <Typography variant="body2">{numero2}</Typography>
    }, [numero2])

    return (
        <Grid spacing={0} container sx={{ mt: '5% !important', m: 'auto', width: 500 }} display="flex" justifyContent="space-between" alignItems="center" >
            {console.log("RENDER-FC")}
            <Typography variant="body2">{numero}</Typography>
            <Button onClick={() => sumarNumero2()} variant="contained">COUNTER useMemo</Button>
            <Box>{memoRenderElement}</Box>
            <Typography variant="h5">{getDataTxt}</Typography>
            <ComponenteHijo sumar={sumador} />
        </Grid>
    )
}
