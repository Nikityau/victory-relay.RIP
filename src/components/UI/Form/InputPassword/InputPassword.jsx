import React, {useContext, useEffect, useRef, useState} from 'react';

import lock from '../../../../assets/icons/auth-icons/lock.svg'
import eye from '../../../../assets/icons/auth-icons/eye.svg'
import eyeClose from '../../../../assets/icons/auth-icons/glaz-close.svg'

import classes from "./InputPassword.module.css";

import {AppContext} from "../../../App/App";

const InputPassword = ({setPassword}) => {

    const appContext = useContext(AppContext)

    const [isHide, setIsHide] = useState(true)

    const input = useRef(null)

    const focusInput = () => {
        input.current.focus();
    }

    const changePasswordVisibility = () => {
        setIsHide(!isHide)
        //input.current.type = isHide ? 'password' : 'text';
    }

    useEffect(() => {
        input.current.type = isHide ? 'password' : 'text';
    }, [isHide, input])

    return (
        <div className={classes.passwordInput}>
            <img src={lock} alt={'lock'} className={classes.lockImg} onClick={focusInput} onDragStart={appContext.prevDef}/>
            <img src={isHide ? eyeClose : eye} alt={'eye'} className={classes.eyeImg} onClick={changePasswordVisibility} onDragStart={appContext.prevDef}/>
            <input type={'password'} ref={input} placeholder={'пароль'} onChange={e => setPassword(e.target.value)}/>
        </div>
    );
};

export default InputPassword;