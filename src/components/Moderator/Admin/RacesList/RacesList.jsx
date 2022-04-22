import React from 'react';

import classes from "./RacesList.module.css";
import Race from "./Race/Race";

const RacesList = ({races, children}) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>{children}</h3>
            </div>
            <div className={classes.innerContainer}>
                {
                    races?.results?.map(race => {
                        return (
                            <Race key={race.number} race={race}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RacesList;