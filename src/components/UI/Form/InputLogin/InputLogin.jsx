import React, {useContext, useEffect, useRef} from 'react';

import dude from '../../../../assets/icons/auth-icons/dude.svg'

import classes from "./InputLogin.module.css";

import {AppContext} from "../../../App/App";


const InputLogin = ({setLogin}) => {

    const appContext = useContext(AppContext)

    const input = useRef(null);

    const focusInput = () => {
        input.current.focus();
    }

    return (
        <div className={classes.loginInput}>
            <img className={classes.imgDude} src={dude} alt={'img'} onClick={focusInput} onDragStart={appContext.prevDef}/>
            <input ref={input} type={'text'} placeholder={'логин'} onChange={e => setLogin(e.target.value)}/>
        </div>
    );
};

export default InputLogin;