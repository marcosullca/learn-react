import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const ComponenteExample = React.memo(() => {
    console.log("RENDER EXAMPLE")
    return (
        <Box display="flex" sx={{ mb: 5 }} justifyContent="space-evenly" alignItems="center">
            <Button variant="contained">APLICAR</Button>
            <Typography variant="body1" sx={{ ml: 4 }}>Prueba de funcionalidad del HoC: React.Memo()</Typography>
        </Box>
    )
})

export default function PruebaReactMemo() {
    const [valor, setvalor] = React.useState(0)

    React.useEffect(() => {
        if (valor < 100) {
            setvalor((e) => e + 1)
        }
    }, [valor])
    return (
        //Al alignItems, el width del Box de ComponenteExample se adapta al ancho de los elementos hijos del mismo
        <Box display="flex" flexDirection="column" alignItems="center">
            <ComponenteExample />
            <Typography variant="h3" gutterBottom>{valor}</Typography>
        </Box>
    )
}
