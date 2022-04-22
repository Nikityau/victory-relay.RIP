import React, {useEffect, useRef, useState} from 'react';
import {Link, useHistory} from "react-router-dom";

import home from '../../../assets/icons/mobile-icons/home.svg'
import red_home from "../../../assets/icons/mobile-icons/red-home.svg"
import enter from "../../../assets/icons/mobile-icons/enter.svg"
import red_enter from "../../../assets/icons/mobile-icons/enter-red.svg"
import media from "../../../assets/icons/mobile-icons/media.svg"
import red_media from "../../../assets/icons/mobile-icons/media-red.svg"

import classes from "./MobileNavigation.module.css";

const MobileNavigation = () => {

    const history = useHistory();

    const [left, setLeft] = useState(0);

    const line = useRef(null);
    const home_bl = useRef(null);
    const enter_bl = useRef(null);
    const media_bl = useRef(null);

    useEffect(() => {
        lineLeft()
    }, [left, history])

    const lineLeft = () => {
        if(!line.current) return;

        if(left == 0) {
            const lc_storage = localStorage.getItem('mob_line_user');
            lc_storage ? setLeft(lc_storage) : toHome()
        }

        const coords = localStorage.getItem('mob_line_user')
        const offset = coords || left - line.current.clientWidth / 2

        line.current.style.left = offset + 'px';
    }



    const toHome  = () => {
        const offset = home_bl.current.offsetLeft + home_bl.current.clientWidth / 2 - line.current.clientWidth / 2;
        localStorage.setItem('mob_line_user', offset)
        setLeft(offset);
    }
    const toMedia = () => {
        const offset = media_bl.current.offsetLeft + media_bl.current.clientWidth / 2 + 3 - line.current.clientWidth / 2;
        localStorage.setItem('mob_line_user', offset)
        setLeft(offset);
    }
    const toLogin = () => {
        const offset = enter_bl.current.offsetLeft + enter_bl.current.clientWidth / 2 - line.current.clientWidth / 2;
        localStorage.setItem('mob_line_user', offset)
        setLeft(offset);
    }

    return (
        <nav className={classes.navContainer}>
            <div className={classes.userInterface}>
                <div className={classes.navLine} ref={line}/>
                <div className={classes.innerContainer}>
                    <div className={classes.home} ref={home_bl} onClick={toHome}>
                        <Link to={'/user/relay'}>
                            <img src={home} alt="image"/>
                        </Link>
                    </div>
                    <div className={classes.media} ref={media_bl} onClick={toMedia}>
                        <Link to={'/user/teams'}>
                            <img src={media} alt="image"/>
                        </Link>
                    </div>
                    <div className={classes.enter} ref={enter_bl} onClick={toLogin}>
                        <Link to={'/user/login'}>
                            <img src={enter} alt="image"/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavigation;