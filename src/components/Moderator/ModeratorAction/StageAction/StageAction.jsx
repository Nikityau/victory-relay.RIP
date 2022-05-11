import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";

//components
import Stage from "../ChooseStage/Stage/Stage";
import TeamSelect from "../../../UI/TeamSelect/TeamSelect";
import RoundedStopWatch from "../../../UI/RoundedTimer/RoundedStopWatch";
import TeamBoard from "./TeamBoard/TeamBoard";

//API
import RelayAPIService from "../../../../API/Relay_API/RelayAPI.service";

//styles
import classes from "./StageAction.module.css";
import Clock from "../../../Timer/Clock/Clock";
import SSButon from "../../../UI/Form/SSButton/Rectangle/SSButon";
import Rounded from "../../../UI/Form/SSButton/Rounded/Rounded";

//context
export const TeamSelectedContext = React.createContext(null);

const StageAction = ({stages, teams, setStageRun, races, token, isAccess, plugCallback}) => {

    const history = useHistory();

    const {stage, number, id} = useParams()

    const [idResult, setIdResult] = useState(0)
    const [stageRace, setStageRace] = useState({})
    const [isStageFinish, setIsStageFinish] = useState(false)
    const [teamSelected, setTeamSelected] = useState(null)
    const [isError, setIsError] = useState(false)
    const [avlblTeams, setAvlblTeams] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isStopWatchRun, setIsStopWatchRun] = useState(false)

    useEffect(() => {
        findStage()
        getAvlblTeams()
        finishCheck()
        checkTeam()
    }, [stage, races, stages, isStageFinish, teams, isError, teamSelected, idResult, isStopWatchRun])


    const findStage = () => {
        const st = stages?.find(s => s.id == id);
        setStageRace({...st, stageNumber: number});
    }

    const getAvlblTeams = () => {
        const stageNum = Number.parseInt(number)
        if (Number.isInteger(stageNum) && stageNum >= 0 && stageNum <= stages.length) {
            Array.isArray(races?.results)
                ? setAvlblTeams(races.results[0].teams)
                : setAvlblTeams([])

            return;
        }

        setAvlblTeams([])
        return;
    }

    const checkTeam = () => {

        const t_id = localStorage.getItem('selected_team_id');
        const t_f = teams.find(t => t.id == t_id);

        if (!t_f?.results[number - 1]?.result) {
            setIsError(false)
            return
        }

        if (t_f?.results[number - 1]?.result) {
            setIsError(true)
            return
        }

        setIsError(false)
    }

    const selectTeam = (team_) => {
        const t = teams.find(t => t.id == team_.id);
        setTeamSelected(t)
        localStorage.setItem('selected_team_id', t?.id || '0');
    }
    const changeOpenState = () => {
        if (isStopWatchRun) {
            setIsOpen(false)
        } else {
            setIsOpen(!isOpen);
        }
    }

    const finishCheck = () => {
        const coeffCmpltnss = {
            max: avlblTeams.length,
            current: 0
        }

        avlblTeams?.map(team => {
            const t_c = teams.find(t => t.id == team.id);
            if (t_c?.results[number - 1]?.result) {
                ++coeffCmpltnss.current;
            }
        })

        coeffCmpltnss.max / coeffCmpltnss.current == 1
            ? setIsStageFinish(true)
            : setIsStageFinish(false)
    }

    const startStopWatch = async (isStart = true, time) => {
        setIsStopWatchRun(isStart)

        console.log(teamSelected, id, 'fetch')
        const req = await RelayAPIService.postTeamResult(teamSelected, token, id);
        setIdResult(req.id)
        localStorage.setItem('id_result', req.id);
    }
    const stopStopWatch = async (isStart = false, time) => {
        setIsStopWatchRun(isStart)

        const id_result = localStorage.getItem('id_result')
        setIdResult(0)
        const res = await RelayAPIService.patchTeamResult(teamSelected, token, id_result)
        plugCallback()
    }

    const finish = () => {
        setStageRun(false)
        history.replace(`/admin/${token}`)
    }

    return (
        <TeamSelectedContext.Provider value={teamSelected}>
            {
                isAccess
                    ?
                    <div className={classes.container}>
                        <div className={classes.choiceSide}>
                            <div className={classes.chosenStage}>
                                <div className={classes.title}>
                                    <h3>Выбранный этап</h3>
                                </div>
                                <div className={classes.stage}>
                                    <Stage stage={stageRace} stageNumber={id}/>
                                </div>
                            </div>
                            <div className={classes.chooseTeam}>
                                <div className={classes.title}>
                                    <h3>Выберите команду</h3>
                                </div>
                                <div className={classes.teamSelect}>
                                    <TeamSelect stage={stageRace} teams={avlblTeams} selectTeam={selectTeam}
                                                isOpen={isOpen} changeOpenState={changeOpenState}
                                                teamSelected={teamSelected}/>
                                </div>
                            </div>
                            <div className={classes.timerContainer}>
                                <div className={classes.timer}>
                                    <Clock isRun={isStopWatchRun}/>
                                   <div className={[classes.buttons, isError ? classes.buttonsInvs : ''].join(' ')}>
                                       <div className={classes.desktop}>
                                           <SSButon isStart={isStopWatchRun} startCallback={startStopWatch} stopCallback={stopStopWatch}/>
                                       </div>
                                        <div className={classes.phone}>
                                            <Rounded isStart={isStopWatchRun} startCallback={startStopWatch} stopCallback={stopStopWatch}/>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.resultsSide}>
                            <div className={classes.title}>
                                <h3>Результаты Этапа</h3>
                                <h3 className={[classes.stageComplete, isStageFinish ? classes.complete : ''].join(' ')}>Этап
                                    завершен</h3>
                            </div>
                            <div className={classes.teamBoard}>
                                <TeamBoard stage={stageRace} races={races} teams={teams} avlblTeams={avlblTeams}
                                           finish={finish} isStageFinish={isStageFinish}/>
                            </div>
                        </div>
                    </div>
                    : 403
            }
        </TeamSelectedContext.Provider>
    );
};

export default StageAction;