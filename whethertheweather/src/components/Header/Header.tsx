import React from 'react';
import Select from 'react-select';
import style from './header.module.scss';
import logo from '../../assets/img/logo.png';
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

const Header = () => {

    const theme = useTheme();

    const changeTheme = () => {
        theme.changeTheme(theme.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    const options = [
        {value: 'moscow', label: 'Москва'},
        {value: 'piter', label: 'Санкт-Петербург'},
        {value: 'nizhniy', label: 'Нижний Новгород'}
    ]

    const styleFn = {
        control: (style: any) => ({
            ...style,
            color:  theme.theme == Theme.DARK ? '#fff' : '#000',
            backgroundColor:  theme.theme == Theme.DARK ? '#4F4F4F' :  'rgba(71, 147, 255, 0.2)',
            borderRadius: 10,
            fontSize: 16,
            cursor: 'pointer',
            fontWeight: 'bold',
            width: 216,
            height: 30,
            border: 'none'
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme == Theme.DARK ? '#fff' : '#000',
        }),
    }

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <img className={style.logo} src={logo} alt="Погода"/>
                <h1 className={style.title}>WhetherTheWeather</h1>
            </div>
            <div className={style.wrapper}>
                <svg className={style.change_theme} onClick={changeTheme} width="24" height="28" viewBox="0 0 24 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z"
                        fill="#4793FF"/>
                </svg>
                <Select defaultValue={options[2]} placeholder={'Выберите город'} styles={styleFn}
                        options={options}/>
            </div>
        </header>
    );
};

export default Header;