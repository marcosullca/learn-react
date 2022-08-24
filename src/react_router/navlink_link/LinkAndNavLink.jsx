import { Grid } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const RenderLinkInit = () => {
    return <p>Ruta Inicial</p>
}
const RenderLinkRuta = () => {
    return <p>Ruta Link</p>
}
const RenderNavLinkRuta = () => {
    return <p>Ruta NavLink</p>
}

const LinkAndNavLink = () => {
    return (
        <Grid container flexDirection="column">
            <Grid item>
                <Link to="">GO BASE PATH</Link>
            </Grid>
            <Grid item>
                <Link to="ruta-link">GO PATH "ruta-link"</Link>
            </Grid>
            <Grid item>
                <NavLink to="ruta-nav-link" className={({ isActive }) => {
                    console.log(isActive)
                    //  Return className active-class 
                    return "active-class"
                }}>GO PATH "ruta-nav-link"</NavLink>
            </Grid>

            <Grid item>
                <Outlet />
            </Grid>
        </Grid>
    )
}

const renderLinks = [
    {
        index: true, element: <RenderLinkInit />
    },
    {
        element: <RenderLinkRuta />, path: 'ruta-link'
    },
    {
        element: <RenderNavLinkRuta />, path: 'ruta-nav-link'
    },
]

export { LinkAndNavLink, renderLinks }