import React, { useEffect, useState } from 'react'
import { useComponentDispatchContext } from './ContextTienda';
import { Card, Snackbar, Box, Alert, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function ListProducts() {
    const [products, setproducts] = useState([])
    const action = useComponentDispatchContext()
    const [openSnackbar, setopenSnackbar] = useState({ initState: false, value: false })

    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            .then(res => res.json())
            .then(result => setproducts(result))
    }, [])

    const handleAddCar = (product) => {
        const { name, image_link, price, id } = product
        action({ type: "ADD_PRODUCT", productItem: { name, image_link, price, id } })
        setopenSnackbar({ initState: true, value: !openSnackbar.value })
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (openSnackbar.initState && !openSnackbar.value) {
                setopenSnackbar({ initState: true, value: !openSnackbar.value })
            }
        }, 100)
        return () => {
            clearTimeout(timeout)
        }
    }, [openSnackbar])

    return (
        <Box sx={{ overflowY: 'scroll', height: '80vh' }}>
            {products.map(product => {
                const { brand, id, name, price, image_link } = product
                return (
                    <Card key={id} sx={{ m: 3 }}>
                        <CardMedia
                            component="div"
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <img alt="product"
                                src={image_link}
                                sx={{ objectFit: "cover", width: 150 }} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{brand}</Typography>
                            <Typography gutterBottom variant="body2" color="text.secondary">{name}</Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="body1">
                                {price}
                            </Typography>
                            <IconButton sx={{ ml: 'auto' }} onClick={() => { handleAddCar(product) }}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                )
            })}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openSnackbar.value} /* onClose={() => setopenSnackbar(false)} */
            >
                <Alert onClose={() => setopenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Product Agregado!!!
                </Alert>
            </Snackbar>
        </Box>
    )
}
