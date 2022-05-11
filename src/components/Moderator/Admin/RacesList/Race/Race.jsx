import React, {useContext, useEffect} from 'react';

import classes from "./Race.module.css";

import ButtonRace from "../../../../UI/Form/ButtonRace/ButtonRace";

import {ModeratorContext} from "../../../Moderator";
import {ErrorContext} from "../../Admin";

import RelayAPIController from "../../../../../API/Relay_API/RelayAPI.controller";
import RelayAPIService from "../../../../../API/Relay_API/RelayAPI.service";


const Race = ({race}) => {

    const moder = useContext(ModeratorContext)
    const error = useContext(ErrorContext)

    useEffect(() => {

    }, [])

    const setRaceState = async () => {
        error.setPlug(prevState => !prevState);

        if (race?.is_finish) return

        if (!race?.is_finish && !race?.is_active) {
            if (await RelayAPIController.isRacesActive()) {
                error.setTextError('Аквтиный забег может быть только один');
                error.setIsErrorInvoke(true);
                return;
            }

            const start = await RelayAPIService.startRace(race.id, moder.token)

        }

        if (race?.is_active && !race?.is_finish) {
            try {
                const finish = await RelayAPIService.finishRace(race.id, moder.token)
            } catch (e) {
                error.setTextError('Не все команды закончили забег');
                error.setIsErrorInvoke(true)
            }
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.date}>
                <p>Год проведения забега: {race?.date_year || '??'}</p>
            </div>
            <div className={classes.stages}>
                <p>Количество этапов: {race?.stage_types?.length || '??'}</p>
            </div>
            <div className={classes.teams}>
                <p>Количество команд: {race?.teams.length || "??"}</p>
            </div>
            <div className={classes.raceInfo}>
                <p>Забег заверешен: {race?.is_finish ? "Да" : "Нет"}</p>
            </div>
            <div>
                <p>id забега: {race.id || "??"}</p>
            </div>
            <div>
                <p>номер забега: {race.number || "??"}</p>
            </div>
            {
                race?.is_finish
                    ? ""
                    : <ButtonRace is={!race?.is_active} callback={setRaceState}/>
            }
        </div>
    );
};

export default Race;