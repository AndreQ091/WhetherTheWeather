import {AppDispatch} from "../store";
import {WeatherService} from "../../services/weatherService";
import {
    fetchCurrentWeather as getW,
    fetchCurrentWeatherSuccess,
    fetchCurrentWeatherError
} from '../slices/currentWeatherSlice';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getW())
        const response = await WeatherService.getCurrentWeather(payload);
        if (response.status === 200) {
            dispatch(fetchCurrentWeatherSuccess(response));
        } else dispatch(fetchCurrentWeatherError(response));
    } catch (e) {
        console.log(e);
    }
}