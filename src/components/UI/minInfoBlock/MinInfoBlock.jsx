import React, {useEffect, useState} from 'react';


import classes from "./MinInfoBlock.module.css";

const MinInfoBlock = ({stageNum, team, teams}) => {

    const [blocksTeam, setBlocksTeam] = useState({
        results: []
    })


    const getNormalResult = (result) => {
        if(!result) return "??"

        const index_of_dd = result.toString().indexOf(':')
        const dot = result.toString().indexOf('.');
        return result.toString().substring(index_of_dd + 1, dot + 4);
    }

    useEffect(() => {
        findTeam()
    }, [teams, blocksTeam])

    const findTeam = () => {
        const team_f = teams?.find(t => t.id == team.id)

        setBlocksTeam(team_f)
    }

    return (
        <div className={classes.infoBlockContainer}>
            <div className={classes.numOfBlock} style={{ background: `#${blocksTeam?.color_code_hex}` }}/>
            <div className={classes.blockDesc}>
                <div className={classes.descr}>
                    <p>{ getNormalResult(blocksTeam?.results[stageNum]?.result) || '-' }</p>
                </div>
                <div className={classes.name}>
                    <p>{blocksTeam?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default MinInfoBlock;