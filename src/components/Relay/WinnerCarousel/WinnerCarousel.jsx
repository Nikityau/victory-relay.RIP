import React, {useEffect} from 'react';
import {Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//styles
import 'swiper/css'
import './swiper.css'
import classes from "./WinnerCarousel.module.css"

const WinnerCarousel = ({races, teams}) => {

    useEffect(() => {
        console.log(teams, 'teams')
    }, [races, teams ,races.results])

    const findWinnerOnStage = (stage_num) => {
        if(!Array.isArray(races.results)) return '';

        const team_list = []
        races?.results[0]?.teams?.map(team => {
            const team_f = teams?.find(t => t.id == team.id) || {};
            team_list.push(team_f);
        })

        if(!Array.isArray(team_list[0].results)) return 'ok'
        let stage_winner = team_list[0];

        team_list.map(team => {
            const team_res = team?.results[stage_num]?.result || '1000';
            const stage_winner_res = stage_winner?.results[stage_num]?.result || '1000';

            const formatted_team_res = Number.parseFloat(team_res.toString().substring(team_res.toString().lastIndexOf(':') + 1));
            const formatted_st_winner_res = Number.parseFloat(stage_winner_res.toString().substring(stage_winner_res.toString().lastIndexOf(':') + 1));

            if(formatted_team_res < formatted_st_winner_res) {
                stage_winner = team;
            }
        })

        return stage_winner.name || '-';
    }


    return (
        <div className={[classes.containerCarousel, 'container'].join(' ')}>
            {
                Array.isArray(races?.results)
                    ?  <Swiper
                        modules={[Autoplay]}
                        spaceBetween={200}
                        slidesPerView={3}
                        loop={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        allowTouchMove={false}>
                        {

                            races?.results[0]?.stage_types.map((stage,index) => {
                                return (
                                    <SwiperSlide key={stage.id}><h3>Лучший результат у команды {findWinnerOnStage(index)} на этапе: {index + 1}</h3></SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    : ''
            }
        </div>
    );
};

export default WinnerCarousel;