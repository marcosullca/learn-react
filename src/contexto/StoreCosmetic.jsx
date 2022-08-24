import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import ListProducts from './ListProducts'
import WishList from './WishList'
import { ContextComponent } from './ContextTienda'

const TiendaProducts = () => {

    return (
        <Container sx={{ width: '70%' }}>
            <Box sx={{ textAlign: 'center', my: 3 }}>
                <Typography variant="h4">Venta de Productos</Typography>
            </Box>
            <Grid container spacing={3} >
                <ContextComponent>
                    <Grid item xs={12} lg={5}>
                        <ListProducts />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <WishList />
                    </Grid>
                </ContextComponent>
            </Grid>
        </Container>
    )
}

export default TiendaProducts