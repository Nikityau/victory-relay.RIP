import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, Redirect, useLocation} from 'react-router-dom'

import classes from "./ModeratorNavigation.module.css";

import home from '../../../assets/icons/mobile-icons/home.svg'
import redHome from '../../../assets/icons/mobile-icons/red-home.svg'
import exit from '../../../assets/icons/mobile-icons/enter.svg'
import redEXit from '../../../assets/icons/mobile-icons/enter-red.svg'

const ModeratorNavigation = ({isRun, moderator, token}) => {

    const location = useLocation()

    const lineRef = useRef(null);

    const homeRef = useRef(null);
    const exitRef = useRef(null);

    useEffect(() => {
        Left()
        //console.log(location.pathname)
    }, [location])

    const Left = () => {
        const path = location.pathname;

        if (!lineRef.current || !homeRef.current || !exitRef.current) return

        if(path.includes('stage')) {
            toHome()
            return
        }

        if(path.includes('exit')) {
            toExit()
            return
        }
    }

    const toHome = () => {
        const offset = homeRef.current.offsetLeft + (homeRef.current.clientWidth / 2 || 11);
        setLeft(offset)
    }
    const toExit = () => {
        const offset = exitRef.current.offsetLeft + (exitRef.current.clientWidth / 2 || 10.5);
        setLeft(offset)
    }
    const setLeft = (offsetLeft) => {
        const halfLine = lineRef.current.clientWidth / 2;
        lineRef.current.style.left = offsetLeft - halfLine + 'px';
    }

    return (
        <footer className={classes.moderNavContainer}>
            <nav className={classes.wrapper}>
                <div ref={lineRef} id={'moder-line'} className={classes.line}/>
                <div onClick={toHome} ref={homeRef}
                     className={[classes.home, isRun ? classes.touchPrevent : ''].join(' ')}>
                    <Link to={`/relay-admin/${token}/choose-stage`}>
                        <img src={location.pathname.includes('stage') ? redHome : home} alt={'img'}/>
                    </Link>
                </div>
                <div onClick={toExit} ref={exitRef}
                     className={[classes.exit, isRun ? classes.touchPrevent : ''].join(' ')}>
                    <Link to={`/relay-admin/${token}/exit`}>
                        <img src={location.pathname.includes('exit') ? redEXit : exit} alt={'img'}/>
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default ModeratorNavigation;