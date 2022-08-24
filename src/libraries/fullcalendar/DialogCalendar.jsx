import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const DialogCalendar = ({ open, setOpen, children }) => {
    const handleClose = () => {
        setOpen({ ...open, dialog: false })
    }
    return (
        <Dialog
            open={open.dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Título de registro de cita
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Confirmación para registrar una cita...
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                {children}
            </DialogActions>
        </Dialog>
    )
}

export default DialogCalendar