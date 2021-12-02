import React from 'react';
import Card from './Card';
import style from './days.module.scss';
import Tabs from "./Tabs";


export interface Day {
    day: string
    date: string
    icon: string
    temp_day: string
    temp_night: string
    desc: string
}

const Days = () => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            date: '13 ноября',
            icon: 'sun',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
        {
            day: 'Завтра',
            date: '14 ноября',
            icon: 'mainly_cloudy',
            temp_day: '-11',
            temp_night: '22',
            desc: 'Облачно',
        },
        {
            day: 'Сегодня',
            date: '15 ноября',
            icon: 'mainly_cloudy',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
        {
            day: 'Сегодня',
            date: '16 ноября',
            icon: 'mainly_cloudy',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
        {
            day: 'Сегодня',
            date: '17 ноября',
            icon: 'small_rain',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
        {
            day: 'Сегодня',
            date: '18 ноября',
            icon: 'small_rain',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
        {
            day: 'Сегодня',
            date: '19 ноября',
            icon: 'sun',
            temp_day: '1',
            temp_night: '-2',
            desc: 'Облачно',
        },
    ]
    return (
        <>
            <Tabs />
            <div className={style.days}>
                {days.map(day => <Card key={day.day} {...day}/>)}
            </div>
        </>

    );
};

export default Days;