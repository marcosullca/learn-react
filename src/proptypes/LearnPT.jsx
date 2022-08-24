import React from 'react'
import PropTypes from 'prop-types';

LearnPT.propTypes = {
    dato: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
    }).isRequired
}

//o se usa props o declaracion entre llaves
export default function LearnPT({user={}, dato}) {
    // const dato = props.dato;
    return (
        <div style={{padding:"15px"}}>
            {dato}
            <div>
                {user.name} + {user.lastname}
            </div>
        </div>
    )
}
