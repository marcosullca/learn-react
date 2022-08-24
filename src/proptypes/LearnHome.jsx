import React from 'react';
import PropTypes1 from './PropTypes1'
export default function LearnHome() {

    const [value, setValue] = React.useState(<p>VALUE</p>);
    return <div>
        <PropTypes1 children={typeof value === "string" ? <p>Error</p> : value} />
    </div>;
}
