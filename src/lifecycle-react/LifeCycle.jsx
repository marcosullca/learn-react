import { Button } from '@mui/material';
import React from 'react'
import LifeCycleChild from './LifeCycleChild';

console.log("--ANTES DE FUNCION --");
export default function IntroLifeCycle() {

    console.log("--INICIO DE FUNCION--");
    const [arrayNumeros, setarrayNumeros] = React.useState([4])
    const [mensaje, setmensaje] = React.useState("marco")
    React.useEffect(() => {
        console.log('useEffect !!!');
    }, [])

    //USE EFFECT
    /*
        - Al no declarar dependencias -> call callback despues de cada renderizacion
        - Al usar array vacio -> call callback only first render
        - Al usar valores en el array -> cambiara cuando uno de los valores del "array de dependencias" cambie
    */

    const clickeo = (e) => {
        setarrayNumeros([...arrayNumeros, arrayNumeros.length]);
        setmensaje("msg: " + arrayNumeros.length);
    }
    return (
        <div>
            {console.log("--RENDER FUNCTION --")}
            <Button variant="contained" onClick={clickeo}>Clickear !!!</Button>
            <p>{arrayNumeros.toString()}</p>
            <LifeCycleChild mensaje={mensaje} />
        </div>
    )
}
