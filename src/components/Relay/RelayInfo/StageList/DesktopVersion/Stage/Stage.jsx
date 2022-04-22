import React, {useContext, useEffect, useRef, useState} from 'react';

import classes from "./Stage.module.css";

import MinInfoBlock from "../../../../../UI/minInfoBlock/MinInfoBlock";

import {AppContext} from "../../../../../App/App";


const Stage = ({stage,stageNum , teams, races}) => {

    const appContext = useContext(AppContext)

    const [race, setRace] = useState([]);

    useEffect(() => {
        getRace()
    }, [races])

    const getRace = () => {
        if(Array.isArray(races?.results)) {
            setRace(races.results[0]?.teams);
        }
    }

    return (
        <div className={classes.stageContainer}>
            <div className={classes.stageInfo}>
                <div className={classes.stageLogo}>
                    <img  src={stage?.icon} alt={'img'} onDragStart={appContext.prevDef}/>
                </div>
                <div className={classes.stageDescr}>
                    <h3>Этап {stageNum + 1}</h3>
                    <p>{stage.name}</p>
                </div>
            </div>
            <div className={classes.teamsInfo}>
                {
                    race?.map(team => {
                        return (
                            <div key={team.id}>
                                <MinInfoBlock team={team} stageNum={stageNum} teams={teams}/>
                                <div className={classes.line}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Stage;