import React, {useState} from 'react';
import {Link} from "react-router-dom";

//components
import WinnerCarousel from "../WinnerCarousel/WinnerCarousel";

//styles
import classes from './Header.module.css';

//images
import rgupsLogo from "../../../assets/icons/rgupsLogo.png"
import enter from "../../../assets/icons/mobile-icons/enter-red.svg"

const Header = ({stageWinnerState, races, teams}) => {
    const [title, setTitle] = useState("Эстафета Победы");

    return (
        <header className={[classes.header, 'container'].join(' ')}>
            <div className={classes.innerContainer}>
                <div className={classes.burger}>
                    <Link to={'/user/login'}>
                        <img src={enter} alt={'img'}/>
                    </Link>
                </div>
                <div className={classes.slider}>
                    <WinnerCarousel winnersState={stageWinnerState} races={races} teams={teams}/>
                </div>
                <div className={classes.logo}>
                    <img src={rgupsLogo} alt="image" onDragStart={e => e.preventDefault()}/>
                </div>
            </div>
        </header>
    );
};

export default Header;