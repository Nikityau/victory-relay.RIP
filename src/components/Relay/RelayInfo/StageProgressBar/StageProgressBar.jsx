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
import markSeries from "react-vis/es/plot/series/mark-series";
import team from "../../../Moderator/ModeratorAction/StageAction/TeamBoard/Team/Team";

const StageProgressBar = React.forwardRef(({teams, globalProg, progressCircle, stages, races}, ref) => {


    const isStageComplete = (pgCirc, globPg) => {
        return globPg >= pgCirc;
    }

    const [race, setRace] = useState([])

    const [markerData, setMarkerData] = useState([])
    //let markerData = [];

    const [markerChartDataArray, setMarkerChartDataArray] = useState([])

    /* const [markerChartData, setMarkerChartData] = useState([
         { color: 'red', angle: 1 },
         { color: 'blue', angle: 1 },
         { color: 'orange', angle: 1 },
         { color: 'black', angle: 1 },
     ])*/

    useEffect(() => {
        if (Array.isArray(races?.results)) {
            setRaceTeams()
            setMarkers()
            console.log('test')
        }

    }, [races, teams, markerChartDataArray])

    const setRaceTeams = () => {
        const raceTeams = races.results[0]?.teams.map(team => {
            return {...team, isHide: false}
        })
        setRace(raceTeams)
    }

    const setMarkers = () => {
        const markerData_ = race?.map(team => {
            return {name: team.name, color: team.color_code_hex, x: 0}
        })
        setMarkerData(markerData_)
    }

    const checkMarker = (markerLeft, color) => {
        const index = markerData.findIndex(team => {
            return team.color == color;
        })
        if (index === -1) return;

        markerData[index].x = markerLeft || 0;
        chartSet(markerLeft)
    }

    const chartSet = async (leftOffset) => {

        const markers_ = markerData?.filter(team => {
            return team.x == leftOffset;
        });

        console.log(markers_, 'data')
        if (!markers_.length || markers_.length === 1) {
            console.log('work')
            return;

        }

        console.log(markers_, 'findMarkers')
        const raceTeams_ = race.map(team => {
            const find = markers_.find(t => t.color == team.color_code_hex)

            if (find) {
                return {...team, isHide: true}
            } else {
                return {...team, isHide: false}
            }
        })

        const markerChartData = markers_.map(team => {
            return {color: `#${team.color}`, angle: 1};
        })


        const findIndex = markerChartDataArray.findIndex(t => {
            return t.x == leftOffset;
        });

        if(findIndex !== -1) {
            markerChartDataArray[findIndex].data = markerChartData;
        } else {
            if(markerChartDataArray.length === 0) {
                console.log(markers_, 'findMarkers')
                await setMarkerChartDataArray([
                    {
                        x: leftOffset,
                        data: markerChartData
                    }
                ])
            } else {
                await setMarkerChartDataArray(prevState => [...prevState, { x:leftOffset, data:markerChartDataArray }])
            }
        }
        console.log(markerChartDataArray, 'ChartDataArray')

        setRace(raceTeams_)
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
                                <StageCircle key={stage.id}
                                             complete={isStageComplete(progressCircle * index, globalProg)}
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
                                            markerId={index} isHide={team.isHide || false} callback={checkMarker}/>
                            )
                        })
                    }

                    {
                        markerChartDataArray.map((marker, index) => {
                            return (
                                <div key={index} className={[classes.chart, !markerData.length ? classes.hide : ''].join(' ')}
                                     style={{left: marker.x || '200px'}}>
                                    <div className={classes.chartImg}>
                                        <img src={img_marker} alt={'img'}/>
                                    </div>
                                    <div className={classes.radChart}>
                                        <RadialChart colorType={'literal'}
                                                     data={marker?.data || []}
                                                     width={60}
                                                     height={60}/>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className={classes.chart} ref={unitMarker}>
                        <div className={classes.chartImg}>
                            <img src={img_marker} alt={'img'}/>
                        </div>
                       <div className={classes.radChart}>
                           <RadialChart colorType={'literal'}
                                        data={markerChartData}
                                        width={60}
                                        height={60}/>
                       </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );
})


export default StageProgressBar;