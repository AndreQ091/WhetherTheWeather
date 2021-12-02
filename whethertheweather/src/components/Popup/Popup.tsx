import React from 'react';
import style from './popup.module.scss';
import temp from "../../assets/img/temp.png";
import pressure from "../../assets/img/pressure.png";
import precipitation from "../../assets/img/precipitation.png";
import wind from "../../assets/img/wind.png";
import {GlobalSvgSelector} from "../../utils/GlobalSvgSelector";
import logo from "../../assets/img/Groupsun.png";

const Popup = () => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
        <>
            <div className={style.blur}/>
            <div className={style.popup}>
                <div className={style.close}><GlobalSvgSelector id={'close'}/></div>
                <div className={style.short_info}>
                    <h1 className={style.current_temp}>20&deg;</h1>
                    <h1 className={style.day_title}>Сегодня</h1>
                    <img className={style.weather_logo} src={logo} alt=""/>
                    <p>Время: 21:45</p>
                    <p>Город: Нижний Новгород</p>
                </div>
                <ul className={style.weather_details}>
                    {items.map(item => (
                        <li className={style.element}>
                            <div className={style.left}>
                                <div className={style.icon_wrap}>
                                    <GlobalSvgSelector id={'sun'}/>
                                </div>
                                <p className={style.detail_name}>{item.name}</p>
                            </div>
                            <p className={style.detail_desc}>{item.value}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Popup;