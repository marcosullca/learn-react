import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router'
export default function NavigateE1() {

    const navigate = useNavigate();


    //replace:true -> para no volver a la anterior ruta con el boton "back"
    const clickSubmit = (e) => {
        navigate("../navigate2", {
            state: { name: 'marco' },
            replace: true
        })
    }
    return (
        <div>
            <Button variant="contained" onClick={clickSubmit}>REDIRECT to navigate2</Button>
        </div>
    )
}
