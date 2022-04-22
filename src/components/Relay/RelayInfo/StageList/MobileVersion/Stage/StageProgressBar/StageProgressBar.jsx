import React, {useEffect, useRef, useState} from 'react';

//styles
import classes from "./StageProgressBar.module.css";

const StageProgressBar = React.forwardRef(({progress = 100}, ref) => {

    return (
        <div className={classes.progressBarContainer}>
            <div className={[classes.progressBarBack, 'progress-bar-back'].join(' ')}/>
            <div className={classes.progressBarLine} ref={ref}/>
        </div>
    );
});

export default StageProgressBar;