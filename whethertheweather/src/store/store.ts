import {configureStore, combineReducers} from "@reduxjs/toolkit";
import currentWeatherReducer from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
    currentWeatherReducer
});

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    preloadedState: undefined,
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;