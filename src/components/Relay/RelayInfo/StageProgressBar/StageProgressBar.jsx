import React, {useContext, useEffect, useRef, useState} from 'react';

//components
import StageCircle from "./StageCricle/StageCircle";
import TeamMarker from "./TeamMarker/TeamMarker";

//styles
import classes from "./StageProgressBar.module.css";

//images
import finish from '../../../../assets/icons/progress-bar-icon/finish.png'

//context
import {AppContext} from "../../../App/App";
import {RadialChart} from "react-vis";

//img
import img_marker from '../../../../assets/icons/marker/marker.svg'

const StageProgressBar = React.forwardRef(({teams, globalProg, progressCircle, stages, races}, ref) => {

    const appContext = useContext(AppContext)

    const isStageComplete = (pgCirc, globPg) => {
        return globPg >= pgCirc;
    }

    const [race, setRace] = useState([])

    const [markerData, setMarkerData] = useState([
        { x:0, color:'000'}
    ])

    const [markerChartData, setMarkerChartData] = useState([
        { color: 'red', angle: 1 },
        { color: 'blue', angle: 1 },
        { color: 'orange', angle: 1 },
        { color: 'black', angle: 1 },
    ])

    useEffect(() => {
        if(Array.isArray(races?.results)) {
            setRace(races.results[0]?.teams);
            setMarkers()
        }
    }, [races, race])

    const setMarkers = () => {

    }

    const checkMarker = (markerLeft, color) => {

    }

    const chartSet = (color) => {

    }

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
                                             icon={stage.icon_bar || stage.icon}/>
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
                                <TeamMarker key={team.id} team={team} teams={teams}
                                            stagesLength={stages?.length}
                                            markerId={index} callback={checkMarker}/>
                            )
                        })
                    }
                    <div className={classes.chart}>
                        <div className={classes.chartImg}>
                            <img src={img_marker} alt={'img'}/>
                        </div>
                       <div className={classes.radChart}>
                           <RadialChart colorType={'literal'}
                                        data={markerChartData}
                                        width={60}
                                        height={60}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
})


export default StageProgressBar;