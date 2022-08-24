import { /* getDate, getDaysInMonth,  getMonth, getYear */ } from 'date-fns';
import React from 'react'
export default function ConvertDate() {

    // const [date, setdate] = React.useState(new Date());
    // const [date2, setdate2] = React.useState(new Date(2021, 10, 12));
    const [clase, setclase] = React.useState(false)

    // const handleChange = () => {
    //     console.log(date)
    //     console.log(new Date(getYear(date), getMonth(date) - 1, 15));
    //     console.log(new Date(getYear(date), getMonth(date) + 1, 15));
    // }

    const onClickDropdown = () => {
        setclase(!clase)
    }

    const defaultDatos = [4, 6, 7, 8, 9, 93, 5]
    const defaultvalor = [{ name: 'marco', edad: 21 }, { name: 'shilary', edad: 21 }]
    const [texto, settexto] = React.useState(defaultDatos)
    const handleClick = (e) => {
        const data = [...defaultDatos];
        data[7] = 5;
        console.log(defaultDatos);
        settexto([...data])
        console.log(defaultvalor.map(valor => {
            const { name } = valor;
            return { name };
        }))
    }
    return (
        <div>
            {/* <p>{`${date}`}</p>
            <p>{`${date2}`}</p> */}
            {/* <button className="btn btn-primary" onClick={() => { handleChange() }}>GG</button> */}
            <div className="dropdown" onClick={onClickDropdown}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className={`dropdown-menu ${clase ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>

            <button onClick={handleClick}>goo</button>
            {texto.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}
