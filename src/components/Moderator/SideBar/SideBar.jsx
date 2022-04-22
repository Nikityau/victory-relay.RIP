import React from 'react';

import classes from './SideBar.module.css'

import Button from "../../UI/Form/Button/Button";
import Stage from "./Stage/Stage";


const SideBar = ({stages, teams, isSideBarOpen, isAccess, exit, races, isStageRun, moderator}) => {

    return (
        <div className={[classes.sideBarContainer, isSideBarOpen ? "" : classes.sideBarClose].join(' ')}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h3>Статус прохождения этапа</h3>
                </div>
                <div className={classes.stagesInfo}>
                    {
                        isAccess
                            ? stages?.map((stage,index) => {
                                return (
                                    <Stage key={stage.id} stage={stage} stageNum={index} teams={teams} races={races} stagesLength={stages.length}/>
                                )
                            })
                            : <h1>You dont have root</h1>
                    }
                </div>
                <div className={classes.exitBtn}>
                    <Button submit={exit} text={'выйти'} isStageRun={isStageRun}/>
                </div>
            </div>
        </div>
    );
};

export default SideBar;