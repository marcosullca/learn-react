import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { Controller, useForm } from 'react-hook-form';

import {
    addMinutes,
    // differenceInMinutes,
    // differenceInYears,
    format
} from 'date-fns'
import { Autocomplete, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import SnackBarCalendar from './SnackBarCalendar';
import DialogCalendar from './DialogCalendar';

const defaultValues = {
    horaInicio: "",
    horaFinal: "",
    duracion: "",
}

const optionsDuracion = [
    { label: "30 min.", id: 1, value: 30 },
    { label: "60 min.", id: 2, value: 60 },
    { label: "90 min.", id: 3, value: 90 },
]
export default function Calendario1() {

    //  STATES --------------------------------------------------
    const [openFeedBackElement, setopenFeedBackElement] = useState({
        snackBar: false,
        dialog: false,
        snackBarMessage: "",
        enabledBtnRegister: true
    })

    //  ---------------------------------------------------------


    const { handleSubmit, control, getValues, setValue } = useForm({
        defaultValues
    })
    const [eventCalendar, setEventCalendar] = useState([{ title: "Evento hoy", start: new Date() }])

    const marcadorCita = (arg) => {
        setValue("horaInicio", arg.date)
        setValue("horaFinal", addMinutes(arg.date, getValues("duracion").value || 30))
        setopenFeedBackElement({
            ...openFeedBackElement,
            enabledBtnRegister: false
        })
    }

    // const differenceFechas = () => {
    //     setDuracion(`${differenceInMinutes(new Date(`2000-10-10 ${horaF}`), new Date(`2000-10-10 ${horaI}`))} min`)
    //     console.log(duracion);
    // }

    const handleRegister = () => {
        const eventMessage = `Evento ${format(getValues("horaInicio"), "HH:mm")} - ${format(getValues("horaFinal"), "HH:mm")}`
        setEventCalendar([...eventCalendar,
        { title: eventMessage, start: getValues("horaInicio") }
        ])
        setopenFeedBackElement({
            ...openFeedBackElement,
            dialog: false,
            snackBar: true,
            enabledBtnRegister: true,
            snackBarMessage: eventMessage
        })
    }

    return (
        <Box sx={{ mx: 4, mt: 5 }}>
            <Paper elevation={3}>
                <Box display="flex" justifyContent="center" sx={{ py: 3 }}>
                    <Typography variant="h4">Registrar Cita</Typography>
                </Box>
                <Grid container sx={{ p: 3 }}>
                    <Grid item xs={12} lg={4}>
                        <Controller
                            render={({ field }) => <input {...field}
                                placeholder="horaInicio" type="time"
                                value={field.value ? format(field.value, "HH:mm") : ""} disabled />}
                            name={`horaInicio`}
                            control={control} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Controller
                            render={({ field }) => <input {...field}
                                placeholder="horaFinal" type="time"
                                value={field.value ? format(field.value, "HH:mm") : ""} disabled />}
                            name={`horaFinal`}
                            control={control} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Controller
                            render={
                                ({ field }) => (
                                    <Autocomplete options={optionsDuracion}
                                        {...field}
                                        onChange={(e, newValue) => {
                                            field.onChange(newValue)
                                            setValue("horaFinal", addMinutes(getValues("horaInicio"), getValues("duracion").value ?? 30))
                                        }}
                                        fullWidth={true}
                                        renderInput={(params) =>
                                            <TextField {...params}
                                                label="Duración" />
                                        }
                                    />
                                )
                            }
                            name="duracion"
                            control={control}
                        />
                    </Grid>

                    {/**
                     *  CALENDAR ------------------------
                     */}
                    <Grid item xs={12} display="flex" justifyContent="center" sx={{ my: 2 }}>
                        <div style={{ width: '700px' }}>
                            <FullCalendar
                                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                                weekends={true}
                                events={eventCalendar}
                                dateClick={(e) => marcadorCita(e)}
                            />
                            <Button fullWidth={true}
                                onClick={handleSubmit((body) => { setopenFeedBackElement({ ...openFeedBackElement, dialog: true }) })}
                                variant="contained" sx={{ mt: 3 }} disabled={openFeedBackElement.enabledBtnRegister}>Registrar</Button>
                        </div>
                    </Grid>
                    {/**
                     *  ------------------------
                     */}

                </Grid>
            </Paper>
            <DialogCalendar open={openFeedBackElement} setOpen={setopenFeedBackElement}>
                <Button onClick={handleRegister} autoFocus>
                    Registrar Cita
                </Button>
            </DialogCalendar>
            <SnackBarCalendar message={openFeedBackElement.snackBarMessage} open={openFeedBackElement} setOpen={setopenFeedBackElement} />
        </Box>
    )
}
