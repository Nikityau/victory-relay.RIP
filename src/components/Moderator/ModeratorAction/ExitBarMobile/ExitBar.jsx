import React, {useContext, useEffect, useRef, useState} from 'react';

//components
import Stage from "../../SideBar/Stage/Stage";
import Button from "../../../UI/Form/Button/Button";
import PopUp from "../../../UI/Mobile/popUp/PopUp";

//images
import man from '../../../../assets/icons/auth-icons/dude.svg'

//styles
import classes from "./ExitBar.module.css";


const ExitBar = ({stages, exit, moderator, isAccess, teams, races, isStageRun}) => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    useEffect(() => {

    }, [isStageRun])

    const preExit = () => {
        setIsPopUpOpen(true)
    }

    const closePopUp = () => {
        setIsPopUpOpen(false)
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.innerWrapper}>
                    <div className={classes.moderator}>
                        <div className={classes.moderImg}>
                            <img src={man} alt={'img'}/>
                        </div>
                        <div className={classes.moderInfo}>
                            <h3>{ moderator?.first_name } { moderator?.last_name } </h3>
                            <h5>{ moderator?.username }</h5>
                        </div>
                    </div>
                    <div className={classes.stages}>
                        <div className={classes.stagesTitle}>
                            <p>Статусы завершения этапов</p>
                        </div>
                        <div className={classes.stagesWrapper}>
                            {
                                !isAccess ? <h2>You dont have root</h2> : stages?.map((stage, index) => {
                                    return (
                                        <Stage key={stage.id} stage={stage} stageNum={index} teams={teams} races={races}
                                               stagesLength={stages.length}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={[classes.button, isStageRun ? classes.isRun : ''].join(' ')}>
                        <Button text={'выйти'} submit={preExit}/>
                    </div>
                </div>
            </div>
            <PopUp callbackTrue={exit} callbackFalse={closePopUp} isOpen={isPopUpOpen}/>
        </div>
    );
};

export default ExitBar;