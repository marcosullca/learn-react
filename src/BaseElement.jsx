import React from 'react'
import { Outlet } from 'react-router'
export default function BaseElement() {


    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

