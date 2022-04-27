import React, {useEffect} from 'react';

import classes from "./SSButon.module.css";

const SsButon = ({isStart, startCallback, stopCallback}) => {

    useEffect(() => {
    }, [isStart])

    return (
        <div className={[classes.container, !isStart ? classes.start : classes.stop].join(' ')}
        onClick={() => !isStart ? startCallback(true) : stopCallback(false)}>
            <h3>{ !isStart ? 'Старт' : 'Стоп' }</h3>
        </div>
    );
};

export default SsButon;