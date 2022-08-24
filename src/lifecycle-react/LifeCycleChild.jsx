import React from 'react'

export default function LifeIntroCycleChild(props) {
    const { mensaje } = props;
    React.useEffect(() => {
        console.log("call useEffect Child !!!");
        const id = setInterval(() => {
            console.log(mensaje);
        }, 2000)
        //Al no agregar clearInterval se esta arrastrando las otras llamadas a setInterval anteriores.
        return () => {
            clearInterval(id);
        }
        //  setInterval es un callback que ejecuta algo cada cierto tiempo.
        //  clean function
    }, [mensaje])
    return (
        <div>
            <p>{mensaje}</p>
        </div>
    )
}

