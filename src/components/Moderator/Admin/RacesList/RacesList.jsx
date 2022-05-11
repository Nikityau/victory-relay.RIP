import React, {useEffect} from 'react';

import classes from "./RacesList.module.css";
import Race from "./Race/Race";

const RacesList = ({races, children}) => {

    useEffect(() => {
    }, [races])

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>{children}</h3>
            </div>
            <div className={classes.innerContainer}>
                {
                    races?.results?.map(race => {
                        return (
                            <Race key={race.id} race={race}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RacesList;