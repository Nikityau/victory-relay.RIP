import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

//components
import StageDescription from "./StageDescription/StageDescription";

//images
import stepBack from '../../../../assets/icons/step-back.svg'

//styles
import classes from './TeamDesription.module.css'

const TeamDescription = ({teams, stages, races}) => {

    const { id } = useParams();

    const [team, setTeam] = useState({})

    const findTeam = () => {
        return teams?.find(team => team.id == id);
    }

    useEffect(() => {
        init()
    }, [team, teams])

    const init = () => {
        const team_f = findTeam();
        setTeam(team_f)
    }

    return (
        <div className={classes.teamContainer}>
            <div className={classes.stepBack}>
               <Link to={'/user/teams'}>
                   <img src={stepBack} alt={'step-back'}/>
               </Link>
            </div>
            <div className={classes.teamInfo}>
                <div className={classes.teamLogo} style={{background: `#${team?.color_code_hex}`}}/>
                <div className={classes.teamName}>
                    <h3>{team?.name}</h3>
                </div>
                <div className={classes.teamScheduler}>
                    <span>Расписание этапов</span>
                </div>
            </div>
            <div className={classes.teamStageInfo}>
                <div className={classes.stagesWrapper}>
                    {
                        stages.map((stage, index) => {
                            return (
                                <div className={classes.stageContainer}  key={stage.id}>
                                    <StageDescription stage={stage} stageNum={index} team={team}/>
                                    <div className={classes.line}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamDescription;