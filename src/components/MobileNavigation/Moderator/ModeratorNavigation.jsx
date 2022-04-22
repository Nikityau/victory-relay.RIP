import React, {useContext, useEffect, useRef, useState} from 'react';
import { Link, Redirect } from 'react-router-dom'

import classes from "./ModeratorNavigation.module.css";

import home from '../../../assets/icons/mobile-icons/home.svg'
import exit from '../../../assets/icons/mobile-icons/enter.svg'

const ModeratorNavigation = ({isRun, moderator, token}) => {

    const [left, setLeft] = useState(0)

    const lineRef = useRef(null);
    const homeRef = useRef(null);
    const exitRef = useRef(null);

    useEffect(() => {
        Left()
    }, [left])

    const Left = () => {
        if(!lineRef.current) return;

        if(left == 0) {
            const ls_storage = localStorage.getItem('mob_line_admin');
            ls_storage ? setLeft(ls_storage) : toHome()
        }

        const coords = localStorage.getItem('mob_line_admin')
        const offset = coords || left;

        lineRef.current.style.left = offset + 'px';
    }

    const toHome = () => {
        const offset = homeRef.current.offsetLeft + homeRef.current.clientWidth / 2 - lineRef.current.clientWidth / 2;
        localStorage.setItem('mob_line_admin', offset)
        setLeft(offset);
    }
    const toExit = () => {
        const offset = exitRef.current.offsetLeft + exitRef.current.clientWidth / 2 - lineRef.current.clientWidth / 2;
        localStorage.setItem('mob_line_admin', offset)
        console.log(offset)
        setLeft(offset)
    }

    return (
        <div className={classes.moderNavContainer}>
            <div className={classes.wrapper}>
                <div ref={lineRef} className={classes.line}/>
                <div onClick={toHome} ref={homeRef} className={[classes.home, isRun ? classes.touchPrevent : ''].join(' ')}>
                    <Link to={`/admin/${token}/choose-stage`}>
                        <img src={home} alt={'img'}/>
                    </Link>
                </div>
                <div onClick={toExit} ref={exitRef} className={[classes.exit, isRun ? classes.touchPrevent : ''].join(' ')}>
                   <Link to={`/admin/${token}/exit`}>
                       <img src={exit} alt={'img'}/>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ModeratorNavigation;