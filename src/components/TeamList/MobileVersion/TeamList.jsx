import React from 'react';

//components
import TeamCard from "./TeamCard/TeamCard";

//styles
import classes from './TeamList.module.css'

const TeamList = ({races}) => {


    return (
        <div className={classes.teamListContainer}>
            <div className={classes.title}>
                <h3>Выберите команду что бы посмотреть расписание этапов команд</h3>
            </div>
            <div className={classes.teamList}>
                {
                    Array.isArray(races?.results)
                        ? races.results[0]?.teams.map(team => {
                            return (
                                <TeamCard key={team.id} team={team}/>
                            )
                        })
                        : ''
                }
            </div>
        </div>
    );
};

export default TeamList;