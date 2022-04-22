import React, {useEffect, useState} from 'react';
import { useStopwatch } from 'react-timer-hook'

import SSButon from "../Form/SSButton/Rectangle/SSButon";

import classes from "./RoundedStopWatch.module.css";
import Rounded from "../Form/SSButton/Rounded/Rounded";
import {logDOM} from "@testing-library/react";


const RoundedStopWatch = ({setIsStopWatchRun, isStopWatchRun, isStageComplete, stopStopWatch, startStopWatch, isError}) => {

    const [interval_, setInterval_] = useState(null)
    const [stopwatch, setStopwatch] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        ms: 0,
        all: 0
    })

    useEffect(() => {

    }, [stopwatch, isStopWatchRun, isStageComplete])

    const startCallback = async () => {
        const now = new Date();
        startStopWatch(true, now)
        const inter = setInterval(() => {
            const time = new Date().getTime() - now.getTime();
            setStopwatch({
                hours:Math.trunc(time / 1000 / 60 / 60),
                minutes:Math.trunc(time / 1000 / 60),
                seconds:Math.trunc(time / 1000),
                ms:(time / 1000).toString().split('.')[1],
                all: time
            })
        }, 50)
        setInterval_(inter)
    }

    const stopCallback = () => {
        clearInterval(interval_)
        stopStopWatch(false, stopwatch)
    }

    return (
        <div className={classes.stopWatchContainer}>
            <div className={classes.stopWatch}>
                <span>{ stopwatch.minutes }:</span>
                <span>{ stopwatch.seconds }:</span>
                <span>{ stopwatch.ms }</span>
            </div>
            <div className={classes.button}>
                <div className={[classes.rectangle, isStageComplete || isError ? classes.stageComplete : ''].join(' ')}>
                    <SSButon startCallback={startCallback} stopCallback={stopCallback} isStart={isStopWatchRun}/>
                </div>
                <div className={[classes.rounded, isStageComplete || isError ? classes.stageComplete : ''].join(' ')}>
                    <Rounded isStart={isStopWatchRun} stopCallback={stopCallback} startCallback={startCallback}/>
                </div>
            </div>
        </div>
    );
};

export default RoundedStopWatch;