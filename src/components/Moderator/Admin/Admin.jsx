import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

//API
import RelayAPIService from "../../../API/Relay_API/RelayAPI.service";

//components
import ButtonBlue from "../../UI/Form/ButtonBlue/ButtonBlue";
import SSButon from "../../UI/Form/SSButton/Rectangle/SSButon";

//styles
import classes from "./Admin.module.css";
import RacesList from "./RacesList/RacesList";
import Error from "../../UI/Error/Error";

export const ErrorContext = React.createContext(null)

const Admin = ({moderator, token}) => {

    const [isAdmin, setIsAdmin] = useState(false)

    const [raceNow, setRaceNow] = useState(null)
    const [racesComplete, setRacesComplete] = useState(null)
    const [allRaces, setAllRaces] = useState(null)

    const [isErrorInvoke, setIsErrorInvoke] = useState(false)
    const [textError, setTextError] = useState('error')

    const [plug, setPlug] = useState(false)

    const error = {
        isErrorInvoke,
        setIsErrorInvoke,
        textError,
        setTextError,
        plug,
        setPlug
    }

    const history = useHistory()

    useEffect(() => {
        checkAdmin();
        getRaces();
    }, [token, plug])

    const checkAdmin = () => {
        setIsAdmin(true)
    }

    const getRaces = async () => {
        const races = await RelayAPIService.getAllRaces();
        const active = await RelayAPIService.getActiveRace();
        const complete = await RelayAPIService.getAllFinishedRaces();

        setRaceNow(active)
        setAllRaces(races)
        setRacesComplete(complete)
    }

    const chooseStage = () => {
        history.replace(`/admin/${token}/choose-stage`);
    }


    return (
       <ErrorContext.Provider value={error}>
           <div className={classes.container}>
               <Error isInvoke={isErrorInvoke} textError={textError} close={setIsErrorInvoke}/>
               <div className={classes.innerContainer}>
                   <div className={classes.adminNav}>
                       <button  onClick={chooseStage}>выбор этапа</button>
                   </div>
                   <div className={classes.adminPanel}>
                       <RacesList races={allRaces}>
                           Все забеги
                       </RacesList>
                       <RacesList races={raceNow}>
                           Текущие
                       </RacesList>
                       <RacesList races={racesComplete}>
                           Завершенные
                       </RacesList>
                   </div>
               </div>
           </div>
       </ErrorContext.Provider>
    );
};

export default Admin;