import React, {useContext} from 'react';

import arrow from '../../../../assets/icons/Galina.svg'

import classes from "./Option.module.css";

import {AppContext} from "../../../App/App";


const Option = ({stage, chooseCallback, isArrow = false, isOpen, stageNum = 0, setIsOpenList}) => {

    const appContext = useContext(AppContext)

    return (
        <div className={classes.optionContainer} onClick={() => {
            chooseCallback(stage, stageNum); setIsOpenList(false)
        }}>
            <div className={classes.img}>
                <img src={stage?.icon} alt={''} onDragStart={appContext.prevDef}/>
            </div>
            <div className={classes.info}>
                <h3>Этап {stage?.id || stageNum + 1}</h3>
                <h5> {stage?.title} </h5>
            </div>
            <div className={[classes.arrow, isArrow ? classes.show : classes.hide].join(' ')}>
                <img src={arrow} alt={'img'} className={isOpen ? classes.arrowUp : classes.arrowDown} onDragStart={appContext.prevDef}/>
            </div>
        </div>
    );
};

export default Option;