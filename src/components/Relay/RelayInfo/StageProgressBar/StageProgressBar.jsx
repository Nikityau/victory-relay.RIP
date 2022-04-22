import React, {useContext, useEffect, useRef, useState} from 'react';

//components
import StageCircle from "./StageCricle/StageCircle";
import TeamMarker from "./TeamMarker/TeamMarker";

//styles
import classes from "./StageProgressBar.module.css";

//images
import finish from '../../../../assets/icons/stages-png/finish.png'

//context
import {AppContext} from "../../../App/App";

const StageProgressBar = React.forwardRef(({teams, globalProg, progressCircle, stages, races}, ref) => {

    const appContext = useContext(AppContext)

    const isStageComplete = (pgCirc, globPg) => {
        return globPg >= pgCirc;
    }

    const [race, setRace] = useState([])

    const [markers, setMarkers] = useState([])

    const changeMarker = (marker) => {

    }



    useEffect(() => {
        if(Array.isArray(races?.results)) {
            setRace(races.results[0]?.teams);
        }
    }, [races, race])

    return (
        <div className={['container', classes.stagePBContainer].join(' ')}>
            <div className={classes.title}>
                <h2>Сводка прохождения этапов</h2>
            </div>
            <div className={classes.progressBar}>
                <div className={classes.backLine} id={'progress-below'}/>
                <div className={classes.progressLine} ref={ref}/>
                <div className={classes.circles}>
                    {
                        stages?.map((stage, index) => {
                            return (
                                <StageCircle key={stage.id} complete={isStageComplete(progressCircle * index, globalProg)}
                                             icon={stage.icon}/>
                            )
                        })
                    }
                    <StageCircle complete={isStageComplete(progressCircle * stages.length + 1, globalProg)}
                                 icon={finish}/>
                </div>
                <div className={classes.teamMarkers}>
                    {
                        race?.map((team, index) => {
                            return (
                                <TeamMarker key={team.id} team={team} teams={teams} stagesLength={stages?.length} markerId={index} setMarker={changeMarker}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
})


export default StageProgressBar;