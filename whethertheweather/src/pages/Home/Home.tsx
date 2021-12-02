import React, {useEffect} from 'react';
import style from './home.module.scss';
import ThisDay from "../../components/ThisDay/ThisDay";
import ThisDayInfo from "../../components/ThisDayInfo/ThisDayInfo";
import Days from "../../components/Days/Days";
import Popup from "../../components/Popup/Popup";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {useAppSelector} from "../../hooks/useAppSelector";

const Home = () => {
    const dispatch = useAppDispatch();
    const {weather, isLoading, response} = useAppSelector(state => state.currentWeatherReducer);

    useEffect(() => {
        dispatch(fetchCurrentWeather('Moscow'));
    }, []);

    return (
        <>
            {/*<Popup />*/}
            <div className={style.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </>
    );
};

export default Home;