import React, {useContext, useEffect, useRef, useState} from 'react';

//components
import StageCircle from "./StageCricle/StageCircle";
import TeamMarker from "./TeamMarker/TeamMarker";

//styles
import classes from "./StageProgressBar.module.css";

//images
import finish from '../../../../assets/icons/progress-bar-icon/finish.svg'

//context
import {AppContext} from "../../../App/App";
import {RadialChart} from "react-vis";

//img
import img_marker from '../../../../assets/icons/marker/marker.svg'
//import markSeries from "react-vis/es/plot/series/mark-series";
import team from "../../../Moderator/ModeratorAction/StageAction/TeamBoard/Team/Team";

const StageProgressBar = React.forwardRef(({teams, globalProg, progressCircle, stages, races}, ref) => {


    const isStageComplete = (pgCirc, globPg) => {
        return globPg >= pgCirc;
    }

    const [race, setRace] = useState([])

    const [markerData, setMarkerData] = useState([])

    const [markerChartDataArray, setMarkerChartDataArray] = useState([])

    useEffect(() => {
        if (Array.isArray(races?.results)) {
            setRaceTeams()
            setMarkers()
            setDefaultChartData()
        }
    }, [races, teams, stages, globalProg])

    const setDefaultChartData = () => {
        setMarkerChartDataArray(getSessionChartData())
    }

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
        if(!leftOffset) return;

        const markers_ = markerData?.filter(team => {
            return team.x == leftOffset;
        });

        if (!markers_.length || markers_.length === 1) {
            rebuildDataChartArray(markers_)
            return;
        }

        const raceTeams_ = race.map(team => {
            const find = markers_.find(t => t.color == team.color_code_hex)

            if (find) {
                sessionStorage.setItem(team.color_code_hex, JSON.stringify({ isHide:true }));
                return {...team, isHide: false}
            } else {
                sessionStorage.setItem(team.color_code_hex, JSON.stringify({ isHide:false }));
                return {...team, isHide: false}
            }
        })


        const markerChartData = markers_.map(team => {
            return {color: `#${team.color}`, angle: 1};
        })

        setSessionChartData(leftOffset, markerChartData)

        setMarkerChartDataArray(getSessionChartData())
        setRace(raceTeams_)
    }

    const rebuildDataChartArray = (markers_) => {
        const dataChart = getSessionChartData();

        if(dataChart) {
            const dataChartFiltered = dataChart.map(dataC => {
                const dataChart_ = dataC.data.filter(data_ => {
                    const bool = data_.color != `#${markers_[0].color}`;
                    return bool
                })
                if(dataChart_.length == 1) {
                    return { x:dataC.x, data: [] }
                }

                return { x:dataC.x, data: dataChart_ }
            })

            const dataLengthFilter = dataChartFiltered.filter(data => {
                return data.data.length;
            })

            sessionStorage.setItem('chartData', JSON.stringify(dataLengthFilter))
        }
    }

    const setSessionChartData = (leftOffset, markerChartData) => {
        const chartData = sessionStorage.getItem('chartData');
        if (!chartData) {
            sessionStorage.setItem('chartData', JSON.stringify([
                {
                    x: leftOffset,
                    data: markerChartData
                }
            ]))

            return;
        }
        const data = JSON.parse(chartData);

        const index = data.findIndex(d => {
            return d.x == leftOffset;
        })

        if (index == -1) {
            data.push({
                x: leftOffset,
                data: markerChartData
            })
        } else {
            data[index].data = markerChartData;
        }

        sessionStorage.setItem('chartData', JSON.stringify(data));
    }

    const getSessionChartData = () => {
        const sessionChartData = sessionStorage.getItem('chartData');

        if (!sessionChartData) {
            return []
        }

        return JSON.parse(sessionChartData)
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
                    <StageCircle complete={isStageComplete(progressCircle * (stages?.length || 0) + 1, globalProg)}
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
                                <div key={index}
                                     className={[classes.chart, !marker.data.length ? classes.hide : ''].join(' ')}
                                     style={{left: marker.x || '200px'}}>
                                    <div className={classes.chartImg}>
                                        <img src={img_marker} alt={'img'}/>
                                    </div>
                                    <div className={classes.radChart}>
                                        <RadialChart colorType={'literal'}
                                                     data={marker?.data || []}
                                                     width={window.screen.width > 500 ? 60 : 45}
                                                     height={window.screen.width > 500 ? 60 : 45}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
})


export default StageProgressBar;