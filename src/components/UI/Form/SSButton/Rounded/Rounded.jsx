import React from 'react';

import classes from "./Rounded.module.css";

const Rounded = ({isStart, startCallback, stopCallback}) => {
    return (
        <div className={classes.container}>
            <div className={classes.middleCircle} onClick={() => isStart ? stopCallback() : startCallback()}>
                <div className={[classes.button, isStart ? classes.stop : classes.start].join(' ')}>
                    <span>{ isStart ? 'стоп' : "старт" }</span>
                </div>
            </div>
        </div>
    );
};

export default Rounded;