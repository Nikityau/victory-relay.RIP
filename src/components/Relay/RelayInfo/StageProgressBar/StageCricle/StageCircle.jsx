import React, {useContext, useEffect, useRef, useState} from 'react';

//styles
import classes from './StageCircle.module.css'

//context
import {AppContext} from "../../../../App/App";

const StageCircle = ({complete = false, icon}) => {
    const appContext = useContext(AppContext)

    return (
        <div className={[classes.circle, complete ? classes.circleComplete : ""].join(' ')}>
            <img src={icon} alt="stage icon" onDragStart={appContext.prevDef}/>
        </div>
    );
};

export default StageCircle;