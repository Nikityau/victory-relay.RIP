import React, {useEffect, useRef, useState} from 'react';

//styles
import classes from "./TeamMarker.module.css";

//images
import marker from '../../../../../assets/icons/marker/marker.svg'

const TeamMarker = ({team, stagesLength, teams, callback, markerId, isHide}) => {

    const markerRef = useRef(null);
    const [markersTeam, setMarkersTeam] = useState(null);

    useEffect(() => {
        findTeam();
        setProgress();
    }, [markersTeam, teams, isHide])

    const findTeam = () => {
        const team_f = teams.find(t => t.id == team.id);

        setMarkersTeam(team_f)
    }

    const setProgress = () => {
        const width = document.querySelector('#progress-below').clientWidth;
        const stagesPerPixel = width / (stagesLength);
        let completionRate = markersTeam?.finished_stages;

        markerRef.current.style.left = stagesPerPixel * completionRate - markerRef.current.clientWidth / 2 + 'px';
        callback(markerRef.current.style.left, team.color_code_hex)
    }

    return (
        <div className={[classes.marker, isHide ? classes.hide : ''].join(' ')} ref={markerRef} id={markerId}>
            <div className={classes.markerImg}>
                <img src={marker} alt={'img'}/>
            </div>
            <div className={classes.teamColor}>
                <div className={classes.color} style={{background: `#${markersTeam?.color_code_hex}`}}/>
            </div>
        </div>
    );
};

export default TeamMarker;