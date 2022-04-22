import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation, Link, Redirect, Route} from "react-router-dom";

import Button from "../UI/Form/Button/Button";
import InputLogin from "../UI/Form/InputLogin/InputLogin";
import InputPassword from "../UI/Form/InputPassword/InputPassword";

import ModeratorAPIController from "../../API/Moderator_API/ModeratorAPI.controller";

import logoRGUPS  from '../../assets/icons/rgupsLogo.png'
import stepBack  from '../../assets/icons/step-back.svg'

import classes from './Auth.module.css'

import {AppContext} from "../App/App";

const Auth = () => {

    const appContext = useContext(AppContext);

    const history = useHistory()
    const location = useLocation()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const submit = async (e) => {
        e.preventDefault();

        const user_data = await ModeratorAPIController.login(login, password)
        if(user_data == 400) {
            setIsError(true)
            return;
        }

        setIsError(false)
        const token = user_data.auth_token;

        history.replace(`/admin/${token}`)
    }


    return (
        <div className={classes.authContainer}>
           <div className={classes.wrapper}>
               <div className={classes.stepBack}>
                   <Link to={'/relay'}>
                       <img src={stepBack} alt={'img'} onDragStart={appContext.prevDef}/>
                   </Link>
               </div>
               <div className={classes.upBar}>
                   <div className={classes.logo}>
                       <img src={logoRGUPS} alt={'logo'} onDragStart={appContext.prevDef}/>
                   </div>
                   <div className={classes.descr}>
                       <h3>Эстафета Победы</h3>
                       <h3>2022</h3>
                   </div>
               </div>
               <div className={classes.loginBar}>
                   <div className={classes.form}>
                       <form>
                           <div className={classes.ioWrapper}>
                               <InputLogin setLogin={setLogin}/>
                               <InputPassword setPassword={setPassword}/>
                               <div className={[classes.error, isError ? classes.isError : ""].join(' ')}>
                                   <h2>Неправильно введены данные</h2>
                               </div>
                               <Button submit={submit}/>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Auth;