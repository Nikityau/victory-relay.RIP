import React from 'react';

import classes from "./MiniButton.module.css";

const MiniButton = ({callback, text}) => {
    return (
        <div className={classes.container} onClick={callback}>
            <h3>{ text }</h3>
        </div>
    );
};

export default MiniButton;