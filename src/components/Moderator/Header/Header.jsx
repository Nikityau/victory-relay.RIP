import React, {useEffect} from 'react';

//components
import ButtonBlue from "../../UI/Form/ButtonBlue/ButtonBlue";

//images
import manImg from '../../../assets/icons/auth-icons/dude.svg'
import logo from '../../../assets/icons/rgupsLogo.png'
import burger from '../../../assets/icons/burger.svg'
import arrow from '../../../assets/icons/arrow.svg'

//styles
import classes from "./Header.module.css";

const Header = ({sideBarCallback, idSideBarOpen, moderator, adminCallback, stageWinnerState, isStageRun}) => {

    const preventDef = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
    }, [moderator])

    return (
        <div className={classes.headerContainer}>
            <div className={classes.leftSide}>
                <div className={classes.burger} onClick={() => sideBarCallback(!idSideBarOpen)}>
                    <img src={idSideBarOpen ? arrow : burger}
                    onDragStart={preventDef}/>
                </div>
                <div className={classes.man}>
                    <div className={classes.manImg}>
                        <img src={manImg} alt={'img'} onDragStart={preventDef}/>
                    </div>
                    <div className={classes.manDescr}>
                        <h3>{ moderator.first_name } { moderator.last_name }</h3>
                        <h5>{ moderator.username }</h5>
                    </div>
                </div>
            </div>
            {
                moderator.role == 'admin'
                    ?  <div className={[classes.adminButton, isStageRun ? classes.stagerun : ''].join(' ')}>
                        <ButtonBlue text={'панель администратора'} callback={adminCallback}/>
                    </div>
                    : ''
            }
            <div className={classes.rightSide}>
                <div className={classes.logoImg}>
                    <img src={logo} alt={'img'} onDragStart={preventDef}/>
                </div>
            </div>
        </div>
    );
};

export default Header;