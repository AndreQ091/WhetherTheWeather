import React from 'react';
import temp from '../../assets/img/temp.png';
import pressure from '../../assets/img/pressure.png';
import precipitation from '../../assets/img/precipitation.png';
import wind from '../../assets/img/wind.png';
import style from './this_day_info.module.scss';

const ThisDayInfo = () => {
    return (
        <div className={style.this_day_info}>
            <ul className={style.weather_details}>
                <li className={style.element}>
                    <div className={style.left}>
                        <div className={style.icon_wrap}>
                            <img src={temp} alt="" className={style.icon}/>
                        </div>
                        <p className={style.detail_name}>Температура</p>
                    </div>
                    <p className={style.detail_desc}>20</p>
                </li>
                <li className={style.element}>
                    <div className={style.left}>
                        <div className={style.icon_wrap}>
                            <img src={pressure} alt="" className={style.icon}/>
                        </div>
                        <p className={style.detail_name}>Давление</p>
                    </div>
                    <p className={style.detail_desc}>765 мм ртутного столба - нормальное</p>
                </li>
                <li className={style.element}>
                    <div className={style.left}>
                        <div className={style.icon_wrap}>
                            <img src={precipitation} alt="" className={style.icon}/>
                        </div>
                        <p className={style.detail_name}>Осадки</p>
                    </div>
                    <p className={style.detail_desc}>Без осадков</p>
                </li>
                <li className={style.element}>
                    <div className={style.left}>
                        <div className={style.icon_wrap}>
                            <img src={wind} alt="" className={style.icon}/>
                        </div>
                        <p className={style.detail_name}>Ветер</p>
                    </div>
                    <p className={style.detail_desc}>3 м/с юго-запад - легкий</p>
                </li>
            </ul>
        </div>
    );
};

export default ThisDayInfo;