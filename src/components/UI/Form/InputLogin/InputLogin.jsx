import React, {useContext, useEffect, useRef} from 'react';

import dude from '../../../../assets/icons/auth-icons/dude.svg'

import classes from "./InputLogin.module.css";

import {AppContext} from "../../../App/App";


const InputLogin = ({setLogin, login}) => {

    const appContext = useContext(AppContext)

    const input = useRef(null);

    const focusInput = () => {
        input.current.focus();
    }

    return (
        <div className={classes.loginInput}>
            <img data-testid={'login-focus-img'} className={classes.imgDude} src={dude} alt={'img'}
                 onClick={focusInput} onDragStart={e => e.preventDefault()}/>
            <input data-testid={'input-login'} ref={input} value={login} type={'text'}
                   placeholder={'логин'}
                   onChange={e => setLogin(e.target.value)}/>
        </div>
    );
};

export default InputLogin;