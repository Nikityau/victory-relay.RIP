import React, {useContext} from 'react';

//images
import lock from '../../../../../assets/icons/lock.svg'

//context
import {AppContext} from "../../../../App/App";

//styles
import classes from "./Stage.module.css";
import {logDOM} from "@testing-library/react";

const Stage = ({stage, stageNumber}) => {

    const appContext = useContext(AppContext)

    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={stage?.icon} alt={'img'} onDragStart={appContext.prevDef}/>
            </div>
            <div className={classes.info}>
                <h3>Этап {stageNumber || 0}</h3>
                <h5>{stage?.title || 'default'}</h5>
            </div>
            <div className={classes.lock}>
                <img src={lock} alt={'img'} onDragStart={appContext.prevDef}/>
            </div>
        </div>
    );
};

export default Stage;