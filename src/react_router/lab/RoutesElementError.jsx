import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'


const RouteNested1 = () => {
    return (
        <>
            <List>
                <Link to="./ruta1">
                    <ListItem>
                        <ListItemText primary="To Ruta1" />
                    </ListItem>
                </Link>
                <Link to="ruta2">
                    <ListItem>
                        <ListItemText primary="To Ruta2" />
                    </ListItem>
                </Link>
            </List>
            <div>Ruta Inicial</div>
            <Outlet />
        </>
    )
}
const Ruta1Element = () => {
    return (
        <div>
            Ruta1 - ELement
        </div>
    )
}


const RoutesElementError = () => {
    return (
        <Routes>
            {/**
             * NO SE PUEDE ANIDAR <Routes/> dentro del hook useRoutes() 
             * 
             * Solo te envía a otra ruta alterna
             */}
            <Route path="" element={<RouteNested1 />}>
                <Route path="ruta1" element={<Ruta1Element />}>
                </Route>
                <Route path="ruta2" element={<p>Ruta 2</p>}>
                </Route>
            </Route>
        </Routes>
    )
}

export default RoutesElementError