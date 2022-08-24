import { Button, Grid } from '@mui/material'
import React, { useRef } from 'react'

export default function HookRef() {
    const [contador, setcontador] = React.useState(0)

    const buttonReferencia = useRef(null);

    const handleChange = (e) => {
        setcontador(contador + 1)
        console.log(buttonReferencia)
    }

    return (
        <Grid spacing={0} container>
            <Grid item xs={6}>
                <p>Hola {contador}</p>
                <Button onClick={handleChange} ref={buttonReferencia} variant="contained">CLICKEAR</Button>
            </Grid>
        </Grid >
    )
}
