import React from 'react';
import logo from '../../assets/img/Groupsun.png';
import style from './this_day.module.scss';
import {Weather} from "../../store/types";


type Props = {
    weather: Weather
};

const ThisDay = ({weather}: Props) => {
    return (
        <div className={style.this_day}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.current_temp}>{Math.round(weather.main.temp)}&deg;</h1>
                    <h1 className={style.today_title}>Сегодня</h1>
                </div>
                <img className={style.weather_logo} src={logo} alt=""/>

            </div>
            <div className={style.bottom}>
                <p>Время: 21:45</p>
                <p>Город: Нижний Новгород</p>
            </div>
        </div>
    );
};

export default ThisDay;