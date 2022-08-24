import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Pagination, /* PaginationItem, */ Typography } from '@mui/material'
import { GetQueryListUsers } from './queries'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const GithubReactQueryIndex = () => {
    const [currentPage, setcurrentPage] = React.useState(1)

    console.log(currentPage)
    const { data = {}, /* isError, */ isLoading } = GetQueryListUsers({ page: currentPage })
    console.log(data)

    const { results, info } = data
    return (
        <Grid container spacing={3}>
            {isLoading && (<p>Loading...</p>)}
            {results && results.map(item => {
                const { id, type, image, name, species, status } = item
                return (
                    <Grid item xs={12} md={4} lg={3} key={id}>
                        <Card>
                            <CardMedia
                                component="div">
                                <img alt="product"
                                    src={image}
                                    style={{ objectFit: "contain", height: '200px', width: '100%' }} />
                            </CardMedia>
                            <CardContent sx={{ display: 'flex', flexDirection: "column" }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body1" >Nombre:</Typography>
                                    <Typography variant="body2" noWrap>{name}</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="body1">Especie:</Typography>
                                    <Typography variant="body2" >{species}</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="body1">Tipo:</Typography>
                                    <Typography variant="body2">{type}</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="body1">Estado:</Typography>
                                    <Typography variant="body2">{status}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
            <Grid item xs={12} display="flex" justifyContent="center">
                <Pagination count={info?.pages} onChange={(event, page) => {
                    setcurrentPage(page)
                }}
                // renderItem={(item) => {
                //     console.log(item)
                //     return (
                //         <PaginationItem
                //             components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                //             {...item}
                //         />
                //     )
                // }}
                />
            </Grid>
        </Grid>
    )
}

export default GithubReactQueryIndex