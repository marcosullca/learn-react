import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const HookUseSearchParams = () => {
    const [searchParams, setsearchParams] = useSearchParams("")
    const [params, setparams] = React.useState([])
    const handleUseSearchParams = () => setsearchParams("name=marco&lastname=sullca")

    React.useEffect(() => {
        if (searchParams) {
            let listParams = []
            for (const [key, value] of searchParams) {
                console.log(key);
                console.log(value);
                listParams = [...listParams, { clave: key, valor: value }]
            }
            setparams(listParams)
        }
    }, [searchParams])

    return (
        <Grid container>
            <Grid item xs={4}>
                <Button variant="contained" onClick={handleUseSearchParams}> Link to useSearchParams </Button>
                {
                    params.map(param => (
                        <Box display="flex" flexDirection="column" key={param.clave}>
                            <Typography variant="body1" >
                                {param.clave}
                            </Typography>
                            <Typography variant="body2">
                                {param.valor}
                            </Typography>
                        </Box>
                    ))
                }

            </Grid >
        </Grid >
    )
}

export default HookUseSearchParams