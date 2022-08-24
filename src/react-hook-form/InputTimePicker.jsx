import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller } from 'react-hook-form';

const InputDateFormPicker = ({ name, control, disabled = false }) => {
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
                            console.log(newValue)
                            field.onChange(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            )}
            name={name}
            control={control}
        />
    )
}

export default InputDateFormPicker