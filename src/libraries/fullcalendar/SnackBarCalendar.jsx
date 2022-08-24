import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SnackBarCalendar = ({ message, open, setOpen }) => {


    const handleClose = () => {
        setOpen({
            ...open,
            snackBar: false
        })
    }
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open.snackBar} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarCalendar