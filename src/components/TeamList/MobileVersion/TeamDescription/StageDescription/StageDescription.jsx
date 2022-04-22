import React, {useContext, useEffect, useState} from 'react';

//images
import img from '../../../../../assets/icons/stages-2/shooter.svg'

//styles
import classes from './StageDescription.module.css'

const StageDescription = ({stage, team, stageNum, teams}) => {

    const [teamDesc, setTeamDesc] = useState({})

    useEffect(() => {
        getTeam()
    }, [teams, teamDesc, team])

    const getTeam = () => {
        if(team?.slug) {
            setTeamDesc(team)
        } else {
            const team_f = teams?.find(t => t.id == team?.id);
            setTeamDesc(team_f)
        }
    }

    const getNormalResult = (result) => {
        if(!result) return '??'

        const index_of_dd = result.toString().indexOf(':')
        const dot = result.toString().indexOf('.');
        return result.toString().substring(index_of_dd + 1, dot + 4);
    }

    return (
        <div className={classes.decrContainer}>
            <div className={classes.stageImg}>
                <img src={stage.icon} alt={'img'} onDragStart={e => e.preventDefault()}/>
            </div>
            <div className={classes.stageDescr}>
                <div className={classes.stage}>
                    <h4>Этап { stageNum + 1 }</h4>
                    <p>{ stage?.title }</p>
                </div>
                <div className={classes.team}>
                    <p>{ team?.name }</p>
                </div>
                <div className={classes.time}>
                    <p>Время забега {  Array.isArray(teamDesc?.results) ? getNormalResult(teamDesc?.results[stageNum]?.result) || '00' : '00'}</p>
                </div>
                <div className={classes.line}/>
            </div>
        </div>
    );
};

export default StageDescription;