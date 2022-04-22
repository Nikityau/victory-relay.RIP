import React from 'react';

import classes from "./FinalButton.module.css";

const FinalButton = ({callback}) => {
    return (
        <div className={classes.container} onClick={callback}>
            <h4>Закончить Этап</h4>
        </div>
    );
};

export default FinalButton;