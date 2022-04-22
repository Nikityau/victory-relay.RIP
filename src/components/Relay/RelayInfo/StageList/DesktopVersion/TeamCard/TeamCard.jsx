import React, {useRef, useState} from 'react';

import classes from './TeamCard.module.css'

const TeamCard = ({team, popUpCallback}) => {

    return (
       <div className={classes.wrapper} onClick={() => popUpCallback(team)}>
           <div className={classes.teamCardContainer}>
               <div className={classes.teamColor} style={{background: `#${team.color_code_hex}`}}/>
               <div className={classes.teamName}>
                   <h4>{team.name}</h4>
               </div>
           </div>
       </div>
    );
};

export default TeamCard;