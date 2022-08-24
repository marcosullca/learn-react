import React from 'react'
import { Button, Grid } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
export default function MuiHome() {

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} sx={{ mb: 3 }}>
                Componentes MUI
            </Grid>
            <Grid item xs={12} sm={3} display="flex" flexDirection="column" justifyContent="space-between">
                <Link to="data-grid">
                    <Button variant="contained">Mostrar DataGrid</Button>
                </Link>
                <Link to="data-grid">
                    <Button variant="contained">Mostrar DataGrid</Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
