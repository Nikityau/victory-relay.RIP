import React from 'react';

import classes from './Button.module.css'

const ButtonRace = ({is = false, callback}) => {
    return (
        <button className={classes.container} onClick={callback}>
           <p> {is ? 'старт' : 'стоп'}</p>
        </button>
    );
};

export default ButtonRace;