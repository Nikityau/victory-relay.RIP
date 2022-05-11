import React, {useEffect, useState} from 'react';

import classes from "./Select.module.css";
import Option from "./Option/Option";

const Select = ({stages, chosen, setIsOpenList, isOpenList, choose}) => {


    useEffect(() => {
    }, [stages])

    return (
        <div className={classes.selectContainer}>
            <div className={classes.chosen}>
                <Option stage={chosen} chooseCallback={() => {
                    setIsOpenList(!isOpenList)
                }} isArrow={true} isOpen={isOpenList} setIsOpenList={() => {}}/>
            </div>
            <div className={[classes.optionList, isOpenList ? "" : classes.optionListHide].join(' ')}>
               <div className={classes.optionListWrapper}>
                   <div className={classes.additionalInnerWrapper}>
                       {
                            stages?.map((stage, index) => {
                                return (
                                    <div key={stage.id} className={classes.option}>
                                        <Option stageNum={stage.id - 1} chooseCallback={choose} setIsOpenList={setIsOpenList} stage={stage} isOpen={isOpenList}/>
                                        <div className={classes.optionLine}/>
                                    </div>
                                )
                            })
                       }
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Select;