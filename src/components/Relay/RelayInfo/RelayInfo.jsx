import React, {useContext, useEffect, useRef, useState} from 'react';

import StageProgressBar from "./StageProgressBar/StageProgressBar";
import StageList from "./StageList/StageList";
import InfoBlock from "../../UI/InfoBlock/InfoBlock";

import classes from './RelayInfo.module.css'

import teamsLength_API_F from "../../../utils/Relay_API_utils/teamsLength";
import progPerPixel_API_F from "../../../utils/Relay_API_utils/progPerPixel";
import globalProgCoeff_API_F from "../../../utils/Relay_API_utils/globalProgCoeff";
import {RadialChart} from "react-vis";

const RelayInfo = ({stages, popUpCallback, teams, races}) => {

    const teamsLength_API = teamsLength_API_F(races);
    const progressPerPixel_API = progPerPixel_API_F(stages?.length || 0,teamsLength_API);
    const globalProgCoeff_API = globalProgCoeff_API_F(races);

    const [globalProgress, setGlobalProgress] = useState(0)

    const progressBar = useRef(null);

    useEffect(() => {
        countGlobProg()
        changeProgress_API()
    },  [globalProgress,stages])

    const countGlobProg = () => {
        //globalProgress_API_F(progressPerPixel_API.circle_pix, globalProgCoeff_API)
        setGlobalProgress((stages?.length || 0) * progressPerPixel_API.circle_pix + 1)
    }

    const changeProgress_API = () => {
        if(!progressBar.current) return;

        progressBar.current.style.width = globalProgress + 'px';
    }

    return (
        <div className={['container', classes.relayInfoContainer].join(' ')}>
            <StageProgressBar teams={teams}  globalProg={globalProgress} progressCircle={progressPerPixel_API.circle_pix}
                              stages={stages} races={races}  ref={progressBar}/>
            <StageList stages={stages} currentStage={Math.floor(globalProgCoeff_API)} teams={teams} races={races} popUpCallback={popUpCallback}/>
            <InfoBlock />
        </div>
    );
};

export default RelayInfo;