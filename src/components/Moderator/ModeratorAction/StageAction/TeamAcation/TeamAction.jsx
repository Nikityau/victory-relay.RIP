import React, {useEffect, useState} from 'react';

import RelayAPIService from "../../../../../API/Relay_API/RelayAPI.service";

import classes from './TeamMarker.module.css'
import team from "../TeamBoard/Team/Team";

const TeamAction = ({team, stage, token}) => {

    const [isStart, setIsStart] = useState(false);
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        console.log(stage.id, 'stage_id')
        console.log(team.id, 'team_id')
        console.log(token, 'token')
        CheckTeamFinished();
    }, [])

    const CheckTeamFinished = async () => {
        if(!team.id) return
        StartCheck()

        const team_res = await RelayAPIService.getTeamById(team.id);

        if(!Array.isArray(team_res.results)) return;

        const team_result = team_res.results.find(res => res.stage_type == stage.id);


        if(!team_result || !team_result?.start_time) {
            setIsFinished(false)
            return;
        }

        if(team_result.start_time && !team_result.result) {
            setIsStart(true)
            return
        }

        setIsFinished(true)
    }

    const StartCheck = async () => {
        const data = await RelayAPIService.getTeamResults(team.id);

        if(!data) return;

        console.log('data has')

        if(!data[0]?.id) return;

        localStorage.setItem(`team_${team.id}_result_token`,data[0]?.id)
    }

    const Start = async () => {
        setIsStart(true);


        console.log(team.id,token, stage.id, 'valid data')
        const req = await RelayAPIService.postTeamResult(team, token, stage.id)
        console.log(req, 'start')
        localStorage.setItem(`team_${team.id}_result_token`, req?.id || -1);

        /*setIsStopWatchRun(isStart)

        console.log(teamSelected, id, 'fetch')
        const req = await RelayAPIService.postTeamResult(teamSelected, token, id);
        setIdResult(req?.id || -1)
        localStorage.setItem('id_result', req?.id || -1);*/
    }
    const Stop = async () => {
        setIsStart(false)

        const id_result = localStorage.getItem(`team_${team.id}_result_token`)

        const res = await RelayAPIService.patchTeamResult(team, token, id_result)
        console.log(res, 'stop')
        CheckTeamFinished();

        /*setIsStopWatchRun(isStart)

        const id_result = localStorage.getItem('id_result')
        setIdResult(0)
        const res = await RelayAPIService.patchTeamResult(teamSelected, token, id_result)
        plugCallback()*/
    }

    return (
        <div className={classes.container}>
            <div className={[classes.button, isFinished ? classes.finished : ""].join(' ')}>
                <button onClick={isStart ? Stop : Start}>{ isStart ? 'Стоп' : 'Старт' }</button>
            </div>
            <div className={classes.teamInfo}>
                <div className={classes.circle} style={{ background: `#${team.color_code_hex}` }}/>
                <div className={classes.info}>
                    <span>{ team.name }</span>
                </div>
            </div>
        </div>
    );
};

export default TeamAction;