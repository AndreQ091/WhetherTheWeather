import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types";
import {AxiosResponse} from "axios";

type Response = {
    status: number,
    message: string
}

interface ICurrentWeather {
    weather: Weather,
    isLoading: boolean,
    response: Response,
}

const initialState: ICurrentWeather = {
    weather: {
        main: {
            temp: 0,
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    },
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
})

export const {fetchCurrentWeather, fetchCurrentWeatherSuccess, fetchCurrentWeatherError} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;