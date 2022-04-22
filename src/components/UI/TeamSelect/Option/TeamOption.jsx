import React, {useContext} from 'react';

import classes from "./Option.module.css";

import arrow from '../../../../assets/icons/Galina.svg'

import {AppContext} from "../../../App/App";

const TeamOption = ({team, callbackTeam, isArrowHide = true, arrowCallback, isArrowUp}) => {

    const appContext = useContext(AppContext)

    return (
        <div className={classes.container} onClick={() => { callbackTeam(team, team?.color_code_hex); arrowCallback()}}>
            <div className={classes.teamColor} style={{background: `#${team?.color_code_hex}`}}/>
            <div className={classes.teamInfo}>
                <div className={classes.teamInfoWrapper}>
                    <h3>{ team?.name || 'Default'}</h3>
                    <h5>{team?.name || 'Default'}</h5>
                </div>
            </div>
            <div className={[classes.arrow, isArrowHide ? classes.arrowHide : ""].join(' ')}>
                <img src={arrow} alt={'img'}
                     className={isArrowUp ? classes.arrowUp : classes.arrowDown}
                    onDragStart={appContext.prevDef}/>
            </div>
        </div>
    );
};

export default TeamOption;