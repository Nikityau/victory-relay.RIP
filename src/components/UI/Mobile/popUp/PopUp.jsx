import React from 'react';

import classes from "./popUp.module.css";

import exit from '../../../../assets/icons/mobile-icons/enter.svg'
import MiniButton from "../../Form/MiniButton/MiniButton";

const PopUp = ({callbackFalse,callbackTrue,isOpen}) => {
    return (
        <div className={[classes.container, isOpen ? "" : classes.containerClose].join(' ')}>
            <div className={classes.wrapper}>
                <div className={classes.img}>
                    <img src={exit} alt={'img'}/>
                </div>
                <div className={classes.title}>
                    <h4>Вы уверены что хотите выйти?</h4>
                </div>
                <div className={classes.buttons}>
                    <MiniButton callback={callbackFalse} text={'нет'}/>
                    <MiniButton callback={callbackTrue} text={'да'}/>
                </div>
            </div>
        </div>
    );
};

export default PopUp;