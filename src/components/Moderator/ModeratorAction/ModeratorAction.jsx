import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import ChooseStage from "./ChooseStage/ChooseStage";
import StageAction from "./StageAction/StageAction";
import ExitBar from "./ExitBarMobile/ExitBar";
import Admin from "../Admin/Admin";

import classes from "./ModeratorAction.module.css";


const ModeratorAction = ({stages, teams, setStageRun, exit, moderator, token, races, isAccess, isStageRun, plugCallback}) => {

    return (
        <div className={classes.container}>
            <Switch>
                <Route path={`/admin/${token}/choose-stage`}>
                    <ChooseStage isAccess={isAccess} moderator={moderator} token={token} stages={stages} setStageRun={setStageRun}/>
                </Route>
                <Route path={`/admin/${token}/stage-race/:id/:number/:stage`}>
                    <StageAction plugCallback={plugCallback} isAccess={isAccess} stages={stages} teams={teams} setStageRun={setStageRun} races={races} token={token}/>
                </Route>
                <Route path={`/admin/${token}/exit`}>
                    <ExitBar isStageRun={isStageRun} exit={exit} isAccess={isAccess} stages={stages} moderator={moderator} teams={teams} races={races}/>
                </Route>
                <Route path={`/admin/${token}/admin-panel`}>
                    <Admin moderator={moderator} token={token} />
                </Route>
                <Route path={`/admin/${token}`}>
                    <Redirect to={`/admin/${token}/choose-stage`}/>
                </Route>
            </Switch>
        </div>
    );
};

export default ModeratorAction;