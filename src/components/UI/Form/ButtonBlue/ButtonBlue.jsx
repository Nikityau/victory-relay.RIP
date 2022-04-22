import React from 'react';

import classes from './ButtonBlue.module.css'

const ButtonBlue = ({text, callback}) => {
    return (
        <div className={classes.container} onClick={callback}>
            <div className={classes.text}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ButtonBlue;