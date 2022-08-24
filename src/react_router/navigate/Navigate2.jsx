import { Button } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const NavigateE2 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const clickSubmit = (e) => {
        //Usar -1 o +1 -> el {state} no funciona
        navigate(-1)
    }
    return (
        <div>
            <Button variant="contained" onClick={clickSubmit}>REDIRECT prev Page</Button>
        </div>
    )
}

export default NavigateE2