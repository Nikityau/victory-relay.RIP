import React, {useState} from 'react';

import infoImg from '../../../assets/icons/info.svg'
import galina from '../../../assets/icons/Galina.svg'

import classes from './InfoBlock.module.css'

const InfoBlock = () => {

    const [isShow, setIsShow] = useState(false);

    const changeIsShow = () => {
        setIsShow(prev => !prev);
    }

    return (
        <div className={classes.infoBlockContainer}>
            <div className={classes.infoBlockImg} onClick={changeIsShow}>
                <img src={infoImg} alt={'img'}/>
            </div>
            <div className={classes.infoBlock}>
                <div className={[classes.info, isShow ? classes.infoShow : classes.infoHide].join(' ')}>
                    <div className={classes.text}>
                        <h4>команды участников выделены цветными кружками соответствующие цвету команды</h4>
                    </div>
                    <div className={classes.galina}>
                        <img src={galina} alt={"galina"} onClick={changeIsShow} className={isShow ? classes.galinaDown : classes.galinaUp}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;