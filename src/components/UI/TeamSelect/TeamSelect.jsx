import React, {useEffect, useState} from 'react';

import classes from "./Select.module.css";
import TeamOption from "./Option/TeamOption";

const TeamSelect = ({stage, teams, teamSelected, changeOpenState, isOpen, selectTeam}) => {

    useEffect(() => {
    }, [teams, stage])

    return (
        <div className={classes.container}>
            <div className={classes.selectedTeam}>
                <TeamOption isArrowHide={false} team={teamSelected}
                            callbackTeam={() => {}} arrowCallback={changeOpenState} isArrowUp={isOpen}/>
            </div>
            <div className={[classes.teamContainer, isOpen ? "" : classes.teamContainerClose].join(' ')}>
                <div className={classes.teamWrapper}>
                    <div className={classes.teamInnerWrapper}>
                        {
                            teams?.map(team => {
                                return (
                                    <div key={team.id} className={classes.teamOptWrapper}>
                                        <TeamOption team={team} callbackTeam={selectTeam} arrowCallback={changeOpenState}/>
                                        <div className={classes.line}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSelect;