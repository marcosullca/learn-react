import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const ComponenteChildMemo = React.memo(() => {
    console.log("call-memo");
    return (
        <>
            {console.log("call-render-memo")}
            <Typography gutterBottom variant="subtitle1">Marco Sullca</Typography>
        </>
    )
}
)

export default function ReactMemo() {

    const [valor, setvalor] = React.useState(0)

    console.log("call - function")


    const handleClick = (e) => {
        setvalor(valor + 1);
    }
    return (
        <Grid container spacing={0}>
            {console.log("call - function - render")}
            <Grid item xs={6}>
                <Button onClick={handleClick}>
                    Contador +1
                </Button>
                <Typography gutterBottom variant="subtitle2">
                    {valor}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <ComponenteChildMemo />
            </Grid>
        </Grid>
    )
}
