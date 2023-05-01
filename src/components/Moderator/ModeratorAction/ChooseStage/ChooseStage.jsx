import React, {useContext, useEffect, useRef, useState} from 'react';
import {useHistory} from "react-router-dom";

//components
import ButtonBlue from "../../../UI/Form/ButtonBlue/ButtonBlue";
import Select from "../../../UI/Select/Select";

//API
import ModeratorAPIController from "../../../../API/Moderator_API/ModeratorAPI.controller";

//styles
import classes from './ChooseStage.module.css'

const ChooseStage = ({stages, setStageRun, token, moderator, isAccess}) => {

    const history = useHistory()

    const [isOpenList, setIsOpenList] = useState(false)
    const [isError, setIsError] = useState(false)
    const [stagesAvlbl, setStagesAvlbl] = useState([])
    const [chosen, setChosen] = useState({...{}, stageNumber: '-'})

    useEffect(() => {
        getStages()
    }, [moderator, chosen])

    const choose = (stageChosen, number) => {
        setChosen({...stageChosen, stageNumber:number})
    }

    const getStages = async () => {
        const stages_avlb = await ModeratorAPIController.getAvailableStages(moderator)
        setStagesAvlbl(stages_avlb)
    }

    const beginStage = () => {

        const st_number = Number.parseInt(chosen.stageNumber);
        if(!Number.isInteger(st_number) && stagesAvlbl.find(st => st.stageNumber != st_number)) {
            setIsError(true)
            return;
        }

        setIsError(false)

        setStageRun(true);
        history.replace(`/relay-admin/${token}/stage-race/${chosen.id}/${chosen.id}/${chosen.title}`);
    }

    return (
        <div className={classes.container}>
            {
                isAccess
                    ?  <div className={classes.mainBlock}>
                        <div className={classes.chooseStage}>
                            <div className={classes.title}>
                                <h3>Выберите этап</h3>
                                <h3 className={[classes.error, isError ? classes.error_show : ''].join(' ')}>Неверно выбран этап</h3>
                            </div>
                            <Select stages={stagesAvlbl} choose={choose} chosen={chosen} isOpenList={isOpenList} setIsOpenList={setIsOpenList}/>
                        </div>
                        <div className={classes.button}>
                            <ButtonBlue text={"Начать этап"} callback={beginStage}/>
                        </div>
                    </div>
                    : '403'
            }
        </div>
    );
};

export default ChooseStage;