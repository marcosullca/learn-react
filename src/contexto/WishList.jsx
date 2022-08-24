import React /* ,{ useContext }  */ from 'react'
import { useNavigate } from 'react-router';
import { useComponentStateContext,/*  ComponentStateAnyContext  */ } from './ContextTienda';
import { Stack, Box, Chip, Typography, Card } from '@mui/material'
export default function WishList() {

    const stateListProducts = useComponentStateContext();

    // const valor = useContext(ComponentStateAnyContext)

    // const actionGetProducts = actions({ type: "GET_PRODUCTS" })

    const { listProducts } = stateListProducts
    console.log(stateListProducts)
    return (
        <Stack spacing={3}>
            <Typography variant="body2">Lista de productos agregados</Typography>
            {
                listProducts.length > 0 ? (
                    <>
                        {listProducts.map(productAdded => {
                            const { name, price, image_link, id, count } = productAdded
                            return (
                                <Card sx={{ display: 'flex', p: 1 }} key={id}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6">{name}</Typography>
                                        <Box display="flex" alignItems="center" my={1}>
                                            <Chip label={price} color="primary" />
                                            <Typography variant="body2" ml={2}>{count ? `${count} u.` : ""}</Typography>
                                        </Box>
                                    </Box>
                                    <img style={{ marginLeft: 'auto', width: '90px', paddingLeft: '20px', objectFit: 'contain' }} src={image_link} alt="producto-agregado"></img>
                                </Card>

                            )
                        })}
                        <Typography variant="body2" sx={{ textAlign: 'end' }}>Total: {listProducts.reduce((total, current) => total + current.count * current.price, 0).toFixed(2)}</Typography>
                    </>
                )
                    : <Typography variant="body2">Sin productos agregados...</Typography>

            }
        </Stack >
    )
}


