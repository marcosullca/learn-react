import React from 'react';
import PropTypes from 'prop-types';

function PropTypes1({ children }) {
    return <div>
        {children}
    </div>;
}


PropTypes1.propTypes = {
    children: PropTypes.element
}

export default PropTypes1