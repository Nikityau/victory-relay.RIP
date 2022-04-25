import React, {useEffect, useRef, useState} from 'react';

import classes from "./Clock.module.css";

const Clock = ({isRun = false}) => {

    const circle = useRef(null);

    const [interval, setTimeInterval] = useState(null)

    let lastTime = 0;

    const [time, setTime] = useState({
        min: '00',
        sec: '00',
        ms: '000'
    })

    useEffect(() => {
        timer()
    }, [isRun])

    const timerValue = () => {
        const newTime = new Date();

        const timeOffset = (newTime.getTime() - lastTime.getTime());
        if(timeOffset > 60) {
            //lastTime = Date.now();
        }

        return timeOffset;
    }

    const timer = () => {
        if (isRun) {
            if (interval != null) return;

            lastTime = new Date();

            const intrvl = setInterval(() => {
                const value = timerValue();
                count(value / 1000)
            }, 200)
            setTimeInterval(intrvl);

            return;
        }

        if (interval == null) return;

        lastTime = 0;
        clearInterval(interval);
        setTimeInterval(null)

        return;
    }

    const count = (val = 0) => {
        let min = Math.trunc(val / 60);
        let sec = Math.trunc(val) % 60;
        let ms = val.toString().split('.')[1];

        if(!ms)
            ms = '000';

        if(ms.toString().length < 3) {
            ms = Number.parseInt(ms) + 100;
            ms = '0' + ms.toString().substring(1);
        }

        if(!sec)
            sec = '00';


        if(sec.toString().length < 2) {
            sec = Number.parseInt(sec) + 10;
            sec = '0' + sec.toString().substring(1)
        }

        if(!min)
            min = '00'

        if(min < 10) {
            min = Number.parseInt(min) + 10;
            min = '0' + min.toString().substring(1)
        }

       setTime({
           ms,
           sec,
           min
       })

        const r = circle.current.r.baseVal.value;
        const c = Math.PI * 2 * r;
        const offset = c - val / 60 * c;

        circle.current.style.strokeDasharray = c;

        setDashOffset(offset)
    }

    const setDashOffset = (offset) => {
        circle.current.style.strokeDashoffset = offset;
    }

    return (
        <div className={classes.container}>
            <svg className={classes.svg} width={300} viewBox="0 0 100 100">
                <circle className={classes.backCircle} cx={'50'} cy={'50'} r={'30'}
                        stroke={'black'} fill={'transparent'}
                        strokeWidth={'4px'}
                        strokeDasharray={'0'}
                        strokeDashoffset={'0'}/>
                <circle className={classes.circle} ref={circle} cx={'50'} cy={'50'} r={'30'}
                        stroke={'red'} fill={'transparent'}
                        strokeWidth={'4px'}/>
            </svg>
            <div className={classes.timerNum}>
               <div className={classes.innerTimerNum}>
                   <span>{ time.min }:</span>
                   <span>{ time.sec }:</span>
                   <span>{ time.ms }</span>
               </div>
            </div>
        </div>
    );
};

export default Clock;