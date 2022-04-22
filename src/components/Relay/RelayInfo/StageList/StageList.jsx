import React, {useContext, useEffect, useState} from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";

// components
import StageMobile from "./MobileVersion/Stage/Stage";
import StageDesktop from "./DesktopVersion/Stage/Stage";
import TeamCard from "./DesktopVersion/TeamCard/TeamCard";

//styles
import classes from './StageList.module.css'

//context
import {AppContext} from "../../../App/App";


//images
import swiperButton from '../../../../assets/icons/slider/right-button.svg'
import {useHistory, useLocation} from "react-router-dom";

const StageList = ({stages, currentStage, popUpCallback, races, teams}) => {

    const appContext = useContext(AppContext)

    const [swiper, setSwiper] = useState(null);
    let [isLeftStop, setIsLeftStop] = useState(false);
    let [isRightStop, setIsRightStop] = useState(false);

    const sliderLeft = () => {
       setIsLeftStop(swiper?.slidePrev());
       setIsRightStop(true)
    }
    const sliderRight = () => {
       setIsRightStop(swiper?.slideNext())
        setIsLeftStop(true)
    }

    return (
        <div className={classes.stageListContainer}>
            <div className={classes.mobileVersion}>
                <div className={classes.listContainer}>
                    {
                        stages?.map((stage, index) => {
                            return (
                                <StageMobile key={stage.id} stageNum={index} stage={stage} teams={teams} races={races}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.desktopVersion}>
                <div className={classes.swiperWrapper}>
                    <div className={classes.swiperLeftImg}>
                        <img src={swiperButton} alt={'img'} onClick={sliderLeft} className={!isLeftStop ? classes.isOff : ""} onDragStart={appContext.prevDef}/>
                    </div>
                    <div className={classes.swiperRightImg}>
                        <img src={swiperButton} alt={'img'} onClick={sliderRight} className={!isRightStop ? classes.isOff : ""} onDragStart={appContext.prevDef}/>
                    </div>
                    <Swiper className={classes.swiperDesktop}
                            allowTouchMove={true}
                            slidesPerView={5}
                            onInit={(ev) => {
                                setSwiper(ev)
                            }}>
                        {
                            stages?.map((stage, index) => {
                                return (
                                    <SwiperSlide key={stage.id}>
                                        <StageDesktop stageNum={index} stage={stage} teams={teams} races={races}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={classes.teamList}>
                    <div className={classes.teamListTitle}>
                        <h3>Выберите команду что бы посмотреть расписание этапов команд</h3>
                    </div>
                    <div className={classes.teamListTeams}>
                        {
                            Array.isArray(races?.results)
                                ? races.results[0]?.teams.map(team => {
                                    return (
                                        <TeamCard key={team.id} team={team} teams={teams} popUpCallback={popUpCallback}/>
                                    )
                                })
                                : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StageList;