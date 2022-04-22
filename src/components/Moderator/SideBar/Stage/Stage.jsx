import React, {useContext, useEffect, useState} from 'react';

//styles
import classes from './Stage.module.css'

//images
import complete from '../../../../assets/icons/stage-additional/complete.svg'
import inProcess from '../../../../assets/icons/stage-additional/in-process.svg'

// context
import {AppContext} from "../../../App/App";

const Stage = ({stage, stageNum, teams, races, stagesLength}) => {

    const appContext = useContext(AppContext)

    const [isStageComplete, setIsStageComplete] = useState(false)

    useEffect(() => {
        stageCheck()
    }, [teams, stage])

    const stageCheck = () => {
        if (!Array.isArray(races.results)) return

        const coeff = {
            max: races.results[0]?.teams.length,
            current: 0
        }
        races.results[0]?.teams.map(team => {
            const team_f = teams.find(t => t.id == team.id);
            if (team_f?.results[stageNum]?.result) {
                ++coeff.current;
            }
        })

        if (coeff.max / coeff.current == 1) {
            setIsStageComplete(true);
            return
        }

        setIsStageComplete(false)
        return;
    }

    return (
        <div className={classes.stageContainer}>
            <div className={classes.img}>
                <img src={stage?.icon}/>
            </div>
            <div className={classes.stageDescr}>
                <h3>Этап {stageNum + 1}</h3>
                <h5>{stage.title}</h5>
            </div>
            <div className={classes.stageInfo}>
                <img src={isStageComplete ? complete : inProcess} className={isStageComplete ? '' : classes.inProcess} alt={'img'} onDragStart={appContext.prevDef}/>
            </div>
        </div>
    );
};

export default Stage;