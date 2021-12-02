import React, {FC} from 'react';
import style from './days.module.scss';
import {Day} from "./Days";
import {GlobalSvgSelector} from "../../utils/GlobalSvgSelector";


const Card: FC<Day> = ({day, date, icon, temp_day, desc, temp_night}: Day) => {
    return (
        <div className={style.card}>
            <h3 className={style.day}>{day}</h3>
            <p className={style.date}>{date}</p>
            <GlobalSvgSelector id={icon}/>
            <p className={style.temp_day}>{temp_day}</p>
            <p className={style.temp_night}>{temp_night}</p>
            <p className={style.desc}>{desc}</p>
        </div>
    )
};

export default Card;