import React, {useEffect, useRef, useState} from 'react';

//components
import StageProgressBar from "./StageProgressBar/StageProgressBar";
import MinInfoBlock from "../../../../../UI/minInfoBlock/MinInfoBlock";
import ShowHideButton from "../../../../../UI/ShowHideButton/ShowHideButton";

//styles
import classes from './Stage.module.css'

const Stage = ({stage, stageNum, teams, races}) => {

    let [isShowMore, setIsShowMore] = useState(true);
    const [progress, setProgress] = useState(60)

    const progressLine = useRef(null)

    useEffect(() => {
        calculateProgress()
        changeProgress();
    }, [progress,teams])

    const changeShowState = () => {
        setIsShowMore(prevState => !prevState)
    }
    const calculateProgress = () => {
        const width = document.querySelector('.progress-bar-back').clientWidth;
        const perPixel = width / races?.results[0]?.teams.length;
        let coeff = 0;
        races?.results[0]?.teams.map(team => {
            const teamInfo = teams?.find(t => team.id == t.id);
            if (teamInfo?.results[stageNum]?.result) {
                ++coeff;
            }
        })

        setProgress(coeff * perPixel)

        return coeff * perPixel;
    }
    const changeProgress = () => {
        progressLine.current.style.width = progress + 'px';
    }

    return (
        <div className={[classes.stageContainer, isShowMore ? "" : classes.stageOpen].join(' ')}>
            <div className={[classes.stageImage, isShowMore ? classes.imgClosed : classes.imgOpen].join(' ')}>
                <img src={stage?.icon} alt="stage image"/>
            </div>
            <div className={[classes.stageDescription].join(' ')}>
                <div className={classes.containerPlug}/>
                <div className={classes.containerInfo}>
                    <div className={classes.descr}>
                        <h3>Этап {stageNum + 1}</h3>
                        <h4>{stage.title}</h4>
                    </div>
                    <div className={classes.stageProgressBar}>
                        <StageProgressBar progress={progress} ref={progressLine}/>
                    </div>
                    <div className={classes.teamsContainer}>
                        {
                            Array.isArray(races?.results)
                                ? races.results[0]?.teams.map(team => {
                                    return (
                                        <div key={team.id}>
                                            <MinInfoBlock team={team} stageNum={stageNum} teams={teams}/>
                                            <div className={classes.hr}/>
                                        </div>
                                    )
                                })
                                : ''
                        }
                    </div>
                </div>
            </div>
            <ShowHideButton isShow={isShowMore} callback={changeShowState}/>
        </div>
    );
};

export default Stage;