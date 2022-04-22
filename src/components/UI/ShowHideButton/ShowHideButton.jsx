import React from 'react';

import show_hide from '../../../assets/icons/show-hide.svg'

import classes from "./ShowHideButton.module.css";

const ShowHideButton = ({isShow, callback}) => {
    return (
        <div className={classes.showHideContainer} onClick={callback}>
            <div className={[classes.imgContainer].join(' ')}>
                <img src={show_hide} alt="button image" className={isShow ? classes.show : classes.hide}/>
            </div>
        </div>
    );
};

export default ShowHideButton;