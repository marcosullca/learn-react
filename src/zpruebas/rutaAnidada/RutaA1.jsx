import { Grid, Paper } from '@mui/material';
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { HistoriaClinicaContext } from './ParentContext';
export default function RutaA1() {

    return (
        <Grid container>
            <Grid item xs={12} lg={3}>
                <Link to="" style={{ padding: "5px" }}>Query1</Link>
                <Link to='reddit' style={{ padding: "5px" }}>Reddit</Link>
                <Link to='propt' style={{ padding: "5px" }}>PropTypes</Link>
                <Link to='github' style={{ padding: "5px" }}>GitHub</Link>
            </Grid>
            <Grid item xs={12} lg={9} p={4}>
                <Paper sx={{ p: 4 }}>
                    <HistoriaClinicaContext>
                        <Outlet />
                    </HistoriaClinicaContext>
                </Paper>

                {/* <Routes>
                    <Route path="reddit" element={<Reddit />} />
                    <Route path="" exact={true} element={<Query1 />} />
                </Routes> */}
            </Grid>
        </Grid>
    )
}
