import React, {useEffect, useState} from 'react';

//components
import Team from "./Team/Team";
import FinalButton from "../../../../UI/Form/FinalButton/FinalButton";

//styles
import classes from "./TeamBoard.module.css";



const TeamBoard = ({teams, stage, finish, races, avlblTeams, isStageFinish}) => {

    useEffect(() => {
    }, [teams, isStageFinish])

    const getTeam = (team) => {
        return teams?.find(t => t.id == team.id);
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                {
                    avlblTeams?.map(team_ => {
                        return (
                            <Team key={team_.id} team={getTeam(team_)} stage={stage}/>
                        )
                    })
                }
            </div>
            <div className={classes.button}>
                <FinalButton callback={finish}/>
            </div>
        </div>
    );
};

export default TeamBoard;