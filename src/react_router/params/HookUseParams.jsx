import React from 'react'
import { Box, Button, Grid, List, ListItem } from '@mui/material'
import { Outlet, useParams } from 'react-router'
import { Link, useSearchParams } from 'react-router-dom'

//HOOK USEPARAMS - USESEARCHPARAMS

const RutaConId = () => {
    let data = useParams()
    const [searchParams, setsearchParams] = useSearchParams()

    const handleChange = () => setsearchParams("name=marco&lastname=sullca")
    console.log(data);

    React.useEffect(() => {
        for (const [key, value] of searchParams) {
            console.log(key);
            console.log(value);
        }
    }, [searchParams])
    return (
        <Box display="flex" flexDirection="column" sx={{ width: '50%' }}>
            <p>
                id: {data.id},
                number: {data.number}
            </p>
            <Button variant="contained" onClick={handleChange}>go!!! useSearchParams</Button>
        </Box>
    )
}

const HookUseParams = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <List>
                    <Link to="">
                        <ListItem>
                            ROUTE HOME
                        </ListItem>
                    </Link>
                    <Link to="4/6">
                        <ListItem>
                            Route with PATH PARAMS
                        </ListItem>
                    </Link>
                </List>
            </Grid >
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid >
    )
}

const arrayRutas = [
    {
        index: true, element: <p>Ruta Inicial</p>
    },
    {
        element: <RutaConId />, path: ':id/:number'
    },

]

export { HookUseParams, arrayRutas }