import React, {useEffect, useRef, useState} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";

import home from '../../../assets/icons/mobile-icons/home.svg'
import red_home from "../../../assets/icons/mobile-icons/red-home.svg"
import enter from "../../../assets/icons/mobile-icons/enter.svg"
import red_enter from "../../../assets/icons/mobile-icons/enter-red.svg"
import media from "../../../assets/icons/mobile-icons/media.svg"
import red_media from "../../../assets/icons/mobile-icons/media-red.svg"

import classes from "./MobileNavigation.module.css";

const MobileNavigation = () => {

    const location = useLocation();

    const line = useRef(null);
    const home_bl = useRef(null);
    const enter_bl = useRef(null);
    const media_bl = useRef(null);

    useEffect(() => {
        lineLeft()
        console.log(location)
        console.log('left')
    }, [location])

    const lineLeft = () => {
        if(!line.current || !home_bl.current || !enter_bl.current || !media_bl.current) return;

        const path = location.pathname;

        if(path.includes('relay')) {
            toHome()
            return
        }

        if(path.includes('team')) {
            toMedia()
            return;
        }

        if(path.includes('login')) {
            toLogin()
            return
        }
    }



    const toHome  = () => {
        const offsetLeft = home_bl.current.offsetLeft + home_bl.current.clientWidth / 2;
        setLeft(offsetLeft)
    }
    const toMedia = () => {
        const offsetLeft = media_bl.current.offsetLeft + media_bl.current.clientWidth / 2;
        setLeft(offsetLeft)
    }
    const toLogin = () => {
        const offsetLeft = enter_bl.current.offsetLeft + enter_bl.current.clientWidth / 2;
        setLeft(offsetLeft)
    }

    const setLeft = (offsetLeft) => {
        line.current.style.left = offsetLeft - line.current.clientWidth / 2 + 'px';
    }

    return (
        <nav className={classes.navContainer}>
            <div className={classes.userInterface}>
                <div className={classes.navLine} ref={line}/>
                <div className={classes.innerContainer}>
                    <div className={classes.home} ref={home_bl} onClick={toHome}>
                        <Link to={'/user/relay'}>
                            <img src={location.pathname.includes('relay') ? red_home : home} alt="image"/>
                        </Link>
                    </div>
                    <div className={classes.media} ref={media_bl} onClick={toMedia}>
                        <Link to={'/user/teams'}>
                            <img src={location.pathname.includes('team') ? red_media : media} alt="image"/>
                        </Link>
                    </div>
                    <div className={classes.enter} ref={enter_bl} onClick={toLogin}>
                        <Link to={'/user/login'}>
                            <img src={location.pathname.includes('login') ? red_enter : enter} alt="image"/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavigation;