import React from 'react';

import classes from "./Error.module.css";

import imgArrow from '../../../assets/icons/arrow.svg'

const Error = ({isInvoke, close,textError}) => {
    return (
        <div className={[classes.errorContainer, isInvoke ? classes.Invoke : ''].join(' ')}>
            <div className={classes.button} onClick={() => close(false)}>
                <img src={imgArrow} alt={'img'}/>
            </div>
            <p>{textError}</p>
        </div>
    );
};

export default Error;