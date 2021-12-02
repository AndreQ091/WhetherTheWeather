import React from 'react';
import style from './days.module.scss';

const Tabs = () => {
    const tabs = [
        {
            value: 'На неделю',
        }, {
            value: 'На месяц',
        },
        {
            value: 'На 10 дней',
        }
    ]
    return (
        <div className={style.tabs}>
            <div className={style.tabs_wrapper}>
                {tabs.map(tab => (
                    <div key={style.value} className={style.tab}>{tab.value}</div>
                ))}
            </div>
            <div className={style.cancel}>Отменить</div>
        </div>
    );
};

export default Tabs;