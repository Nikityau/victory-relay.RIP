import React, {useContext} from 'react';

//components
import StageDescription from "../../TeamList/MobileVersion/TeamDescription/StageDescription/StageDescription";

//styles
import classes from "./PopUpInfoBar.module.css";

//images
import close from '../../../assets/icons/popUp/popUpClose.svg'

const PopUpInfoBar = ({team, popUpCallback, isOpen, races, stages, teams}) => {

    return (
        <div className={[classes.popUpContainer, isOpen ? classes.popUpContainerUp : classes.popUpContainerDown].join(' ')}>
            <div className={classes.upBar}>
                <div className={classes.team}>
                    <div className={classes.teamHex} style={{ background: `#${team?.color_code_hex}` }}/>
                    <div className={classes.teamName}>
                        <p>{ team?.name }</p>
                    </div>
                </div>
                <div className={classes.close} onClick={() => popUpCallback(false)}>
                    <img src={close} alt={'img'} onDragStart={e => e.preventDefault()}/>
                </div>
            </div>
            <div className={classes.bottomBar}>
                {
                    stages?.map((stage, index) => {
                        return (
                            <div key={stage.id} className={classes.wrapper}>
                                <StageDescription stage={stage} team={team} stageNum={index} teams={teams}/>
                                <div className={classes.line}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PopUpInfoBar;