import React, {useContext, useEffect} from 'react';

import current from '../../../../../../assets/icons/Galina.svg'

import classes from "./Team.module.css";

import {TeamSelectedContext} from "../../StageAction";

import {AppContext} from "../../../../../App/App";

const Team = ({team, stage}) => {

    const appContext = useContext(AppContext)
    const teamSelected = useContext(TeamSelectedContext);


    useEffect(() => {
    }, [stage, team])

    return (
        <div className={classes.container}>
            <div className={classes.hex} style={{ background: `#${team?.color_code_hex}` }}/>
            <div className={classes.data}>
                <input value={team?.results[stage?.stageNumber - 1]?.result || '-'} onChange={() => {}}/>
                <div className={[classes.current, teamSelected?.id == team?.id ? classes.currentThis : ""].join(' ')}>
                    <img src={current} alt={'img'} onDragStart={appContext.prevDef}/>
                </div>
            </div>
        </div>
    );
};

export default Team;