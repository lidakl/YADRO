import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from "./moviesSlice";
import searchFilterSlice from "./searchFilterSlice"

const rootReducer = combineReducers({
    movies: reducer,
    searchFilter: searchFilterSlice
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
