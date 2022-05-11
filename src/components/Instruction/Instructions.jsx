import React, {useEffect, useState} from 'react';

import classes from './Instruction.module.css'

import instr_img from '../../assets/icons/info.svg'
import closeImg from '../../assets/icons/Galina.svg'

const Instructions = () => {

    const [isOpen, setIsOpen] = useState(false)

    const ChangeState = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={classes.container}>
            <div className={classes.instrImg} onClick={ChangeState}>
                <img src={instr_img}/>
            </div>
            <div className={[classes.instrWrapper, isOpen ? '' : classes.instrWrapper_Closed].join(' ')}>
                <div className={classes.instrWrapper_closeImg} onClick={ChangeState}>
                    <img src={closeImg}/>
                </div>
                <div className={classes.instructions}>
                    <div className={classes.choose_stage}>
                        <div>
                            <h4>Выбор этапа</h4>
                        </div>
                        <div>
                            <p>Модератор может упарвлять определенными этапами.</p>
                        </div>
                        <div>
                            <p>Для того чтобы выбрать этап просто нажмите на эконку с надписью "Этап" либо на галочку.</p>
                        </div>
                        <div>
                            <p>После откытия меню выберите нужный вам этап.</p>
                        </div>
                        <div>
                            <p>Нажмите кнопку "Начать этап", чтобы перейти к управлению выбранным этапом</p>
                        </div>
                    </div>
                    <div className={classes.stage_action}>
                        <div>
                            <h4>Управление этапом</h4>
                        </div>
                        <div>
                            <p>Перед вами будет окно с выбранным этапом, списком команд на этапе, результатами команд</p>
                        </div>
                        <div>
                            <p>Чтобы начать этап у команды нажмите на выпадающий списко с командами, затем выберите нужную команду</p>
                        </div>
                        <div>
                            <p>После нажмите кнопку "Старт"</p>
                        </div>
                        <div>
                            <p>"Стоп" записывает результат для команды и выводит на таблицу справа</p>
                        </div>
                        <div>
                            <p>Чтобы завершить администрирование нажмите на кнопку "Закончить Этап"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;