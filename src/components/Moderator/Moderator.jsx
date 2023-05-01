import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation, useParams} from "react-router-dom";

//components
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import ModeratorAction from "./ModeratorAction/ModeratorAction";
import ModeratorNavigation from "../MobileNavigation/Moderator/ModeratorNavigation";

//API
import ModeratorAPIController from "../../API/Moderator_API/ModeratorAPI.controller";

//styles
import classes from "./Moderator.module.css";
import RelayAPIService from "../../API/Relay_API/RelayAPI.service";
import Instructions from "../Instruction/Instructions";
import ButtonBlue from "../UI/Form/ButtonBlue/ButtonBlue";

//context
export const ModeratorContext = React.createContext(null);

const Moderator = ({stages, teams, races, plugCallback}) => {

    const history = useHistory();
    const location = useLocation()

    const {token} = useParams();

    const [moderator, setModerator] = useState({})
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isStageRun, setIsStageRun] = useState(false)
    const [isAccess, setIsAccess] = useState(false)

    const moder = {
        moderator,
        token
    }

    useEffect(() => {
        getModeratorInfo()
        checkFinishTeams()
    }, [token, teams, isAccess, isStageRun])

    const getModeratorInfo = async () => {
        const moderReq = await ModeratorAPIController.getMe(token);
        if (moderReq != 403) {
            setModerator(moderReq)
            setIsAccess(moderReq.role == 'user' ? false : true);
            return
        }

        setIsAccess(false)
        return
    }
    const openSideBar = (bool) => {
        setIsSideBarOpen(bool);
    }

    const checkFinishTeams = async () => {
        if (!Array.isArray(races?.results)) return;

        const raceLength = races.results[0]?.stage_types?.length;
        races?.results[0]?.teams?.map(async team => {
            const team_f = teams.find(t => t.id == team.id);
            if(team_f?.is_finish == true) return;

            if(team_f?.results?.length == raceLength) {
                const race_id = races.results[0].id;
                console.log(race_id, team.id, token)
                if(!race_id) return

                await RelayAPIService.finishTeam(race_id, team.id, token);
            }
        })
    }


    const toAdminPanel = () => {
        history.replace(`/relay-admin/${token}/admin-panel`)
    }

    const exit = async () => {
        //logout
        try {
            await ModeratorAPIController.logOut(token)
            history.replace('/user/login')
        } catch (e) {
            history.replace('/user/login')
        }
    }

    return (
        <ModeratorContext.Provider value={moder}>
            <div className={classes.moderatorContainer}>
                <SideBar stages={stages}
                         teams={teams}
                         isStageRun={isStageRun}
                         races={races}
                         exit={exit}
                         moderator={moderator}
                         isSideBarOpen={isSideBarOpen}
                         isAccess={isAccess}/>
                <div className={classes.wrapper}>
                    <div className={classes.main}>
                        <Instructions/>
                            {
                                moderator.role == 'admin'
                                    ?
                                    <div style={{ display: location.pathname.includes('stage-race') ? "none" : "block" }} className={[classes.adminButton, isStageRun ? classes.stagerun : ''].join(' ')}>
                                        <button onClick={toAdminPanel} >панель администратора</button>
                                    </div>
                                    : ''
                            }
                        <Header isStageRun={isStageRun}
                                adminCallback={toAdminPanel}
                                sideBarCallback={openSideBar}
                                moderator={moderator}
                                idSideBarOpen={isSideBarOpen}/>
                        <div className={classes.actionWrapper}>
                            <ModeratorAction plugCallback={plugCallback}
                                             isStageRun={isStageRun} token={token}
                                             isAccess={isAccess} exit={exit} setStageRun={setIsStageRun}
                                             moderator={moderator} stages={stages} teams={teams} races={races}/>
                        </div>
                    </div>
                </div>
                <ModeratorNavigation moderator={moderator} token={token} isRun={isStageRun}/>
            </div>
        </ModeratorContext.Provider>
    );
};

export default Moderator;