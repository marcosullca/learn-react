import { Stack, Grid, Button } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function BaseHooks() {
    return (
        <Grid container spacing={0} sx={{ mt: 5 }}>
            <Grid item xs={4} >
                <Stack spacing={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center' }}>
                    <Link to="/hooks/use-memo">
                        <Button variant="contained">Hook Memo</Button>
                    </Link>
                    <Link to="/hooks/use-callback">
                        <Button variant="contained">Hook Callback</Button>
                    </Link>
                    <Link to="/hooks/use-ref">
                        <Button variant="contained">Hook Ref</Button>
                    </Link>
                    <Link to="/hooks/use-reducer">
                        <Button variant="contained">Hook useReducer</Button>
                    </Link>
                    <Link to="/hooks/prueba-react-memo">
                        <Button variant="contained">Funcionalidad - React.memo()</Button>
                    </Link>
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
