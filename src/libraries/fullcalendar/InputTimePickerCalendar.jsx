import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller } from 'react-hook-form';
import { addMinutes } from 'date-fns';

const InputDateFormPickerCalendar = ({ methods, disabled = false, }) => {
    return (
        <Controller
            render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        {...field}
                        disabled={disabled}
                        label="Seleccione fecha"
                        value={field.value}
                        onChange={(newValue) => {
                            field.onChange(newValue)
                            methods.setValue("horaFinal", addMinutes(newValue, 30))
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            )}
            name="horaInicio"
            control={methods.control}
        />
    )
}

export default InputDateFormPickerCalendar