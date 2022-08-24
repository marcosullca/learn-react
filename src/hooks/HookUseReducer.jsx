import React, { useReducer } from 'react'
import { Button, Typography, Grid } from '@mui/material'

export default function HookUseReducer() {

  const funReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { numero: state.numero + 1 }
      case "decrement":
        return { numero: state.numero - 1 }
      case "potencia":
        return { numero: Math.pow(state.numero, 2) }
      case "raiz":
        return { numero: Math.pow(state.numero, 0.5) }
      default:
        return state.numero;
    }
  }

  const initialState = {
    numero: 0
  }

  const [state, dispatch] = useReducer(funReducer, initialState)



  return (
    <Grid container spacing={0}>
      <Typography>Ejemplo de useReducer</Typography>
      <Grid item xs={8}>
        {console.log(state)}
        <Typography variant="body2">{state.numero}</Typography>
      </Grid>
      <Button variant="contained" onClick={(e) => dispatch({ type: "increment" })}>Increment</Button>
      <Button variant="contained" onClick={(e) => dispatch({ type: "decrement" })}>Decrement</Button>
      <Button variant="contained" onClick={(e) => dispatch({ type: "potencia" })}>Potencia</Button>
      <Button variant="contained" onClick={(e) => dispatch({ type: "raiz" })}>Raiz</Button>
    </Grid>
  )
}
