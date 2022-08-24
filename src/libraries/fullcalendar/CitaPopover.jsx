import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { Controller, useForm } from 'react-hook-form';
import {
    addMinutes,
    // differenceInYears,
    format
} from 'date-fns'
import { Popover, Button, Grid, Box, Paper, TextField, Typography } from '@mui/material';
import InputDateFormPickerCalendar from './InputTimePickerCalendar';
import InputTimePicker from '../../react-hook-form/InputTimePicker'
// import {Typography } from '@mui/material';

const defaultValues = {
    horaInicio: new Date(),
    horaFinal: new Date(),
    duracion: "30 min",
}

const defaultEvents = [
    { title: "Evento hoy", start: new Date(), end: addMinutes(new Date(), 30), nombre: 'Marco' },
    { title: "Evento hoy2", start: "2021-11-01T10:00:00", end: addMinutes("2021-11-01T10:00:00", 30), nombre: 'Marco' },
    { title: "Evento hoy2", start: "2021-11-01T16:00:00", end: addMinutes("2021-11-01T17:00:00", 30), nombre: 'Shilary' },
    {
        groupId: 'lesson-available',
        daysOfWeek: ['1', '2', '3', '4', '5', '6'],
        startTime: '09:00:00',
        endTime: '21:00:00',
        display: 'inverse-background',
        color: '#1B1B1D'
    },

    // {
    //     groupId: "lesson-available",
    //     daysOfWeek: ["2"],
    //     startTime: "15:00:00",
    //     endTime: "16:00:00",
    //     display: "inverse-background",
    //     color: "#ccc"
    // },
    // {
    //     groupId: "lesson-unavailable",
    //     start: "2021-01-19T15:00:00",
    //     end: "2021-01-19T16:00:00",
    //     display: "background",
    //     color: "#ccc"
    // }

]

export default function Calendario2() {
    const methods = useForm({
        defaultValues
    })
    const { handleSubmit, control } = methods
    const [eventCalendar, setEventCalendar] = useState(defaultEvents)
    const [popoverDetails, setpopoverDetails] = useState({
        title: "",
        fecha: "",
        horaInicio: "",
        horaFinal: ""
    })

    // const marcadorCita = (arg) => {
    //     setEventCalendar([...eventCalendar, { title: "Evento hoy", start: arg.date, end: addMinutes(arg.date, 30), nombre: 'Marco' },])
    // }

    const sendData = (data) => {
        console.log(data);
    }
    const [anchorEl, setAnchorEl] = useState(null)

    const popover = (e) => {
        // console.log(e.event._def.extendedProps.nombre)
        if (e.event?._def?.extendedProps?.nombre) {
            console.log(e.event)
            const { _def, _instance: { range: { start, end } } } = e.event
            setAnchorEl(e.el)
            setpopoverDetails({
                title: _def.title,
                fecha: format(addMinutes(start, 300), "yyyy-MM-dd"),
                horaInicio: format(addMinutes(start, 300), "HH:mm"),
                horaFinal: format(addMinutes(end, 300), "HH:mm")
            })
        } else {
            setpopoverDetails({
                title: "",
                fecha: "",
                horaInicio: "",
                horaFinal: ""
            })

        }
        // console.log(e.el);
    }

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const calendar = useRef(null)
    return (
        <Paper elevation={3} sx={{ p: 3, m: 4 }}>
            <Grid container rowSpacing={3}>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Box sx={{ width: "700px" }}>
                        <FullCalendar
                            ref={calendar}
                            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                            weekends={true}
                            events={eventCalendar}
                            headerToolbar={{ left: 'dayGridMonth,timeGridWeek,timeGridDay', center: 'title', right: 'prev,today,next' }}
                            customButtons={{
                                prev: {
                                    click: function (e, el) {
                                        // console.log(calendar.getApi().view.currentEnd // Start)
                                        console.log(calendar.current.getApi().prev());
                                        console.log(calendar.current.getApi().getDate());
                                        console.log(calendar.current.getApi().view.activeStart);
                                    }
                                }

                            }}
                            datesSet={
                                (arg) => {
                                    //  Rango de fechas visible por el usuario (dinamyc)
                                    console.log(arg.view.activeStart);
                                    console.log(arg.view.activeEnd);
                                    console.log(arg.view.type);
                                }
                            }
                            //  para areas que sea necesario bloquear el evento click, don't use dateClick
                            // dateClick={(e) => marcadorCita(e)}
                            eventMouseEnter={(e) => { popover(e) }}
                            eventMouseLeave={(e) => { handlePopoverClose(e) }}
                            selectOverlap={(stillEvent) => {
                                return stillEvent.groupId === "lesson-available";
                            }}
                            select={(arg) => {
                                setEventCalendar([...eventCalendar, { title: "Evento hoy", start: arg.start, end: addMinutes(arg.start, 30), nombre: 'Marco' },])
                            }}
                            editable={true}
                            selectable={true}
                            // selectMirror={true}
                            // dayMaxEvents={true}
                            // allDaySlot={true}
                            eventConstraint="lesson-available"
                            selectConstraint="lesson-available"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <InputDateFormPickerCalendar methods={methods} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <InputTimePicker control={control} name="horaFinal" disabled={true} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Controller
                        render={({ field }) => <TextField disabled {...field} label="Duración" />}
                        name={`duracion`}
                        control={control}
                    />
                </Grid>
                <Button onClick={handleSubmit(sendData)} variant="contained" sx={{ mt: 3 }}>Registrar</Button>
            </Grid>
            <Popover
                sx={{
                    pointerEvents: 'none',
                }}
                open={!!anchorEl}
                anchorEl={anchorEl}
                style={{ margin: '5px' }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Box display="flex" flexDirection="column" alignItems="center" sx={{ m: 3 }}>
                    <Typography variant="body2">Título</Typography>
                    <Typography variant="body1">{popoverDetails.title}</Typography>
                    <Typography variant="body2">Fecha</Typography>
                    <Typography variant="body1">{popoverDetails.fecha}</Typography>
                    <Typography variant="body2">Hora inicio</Typography>
                    <Typography variant="body1">{popoverDetails.horaInicio}</Typography>
                    <Typography variant="body2">Hora final</Typography>
                    <Typography variant="body1">{popoverDetails.horaFinal}</Typography>
                </Box>
            </Popover>
        </Paper>

    )
}
