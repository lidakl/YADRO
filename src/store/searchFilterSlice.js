import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    search: '',
    genres: []
}

const searchFilterSlice = createSlice({
    name: 'searchFilterSlice',
    initialState: initialState,
    reducers: {
        setGenres(state, action) {
            state.genres = [...state.genres, action.payload];
        },
        deleteGenres(state, action) {
            state.genres = [...state.genres.filter(genre => genre !== action.payload)];
        },
        setSearchStr(state, action) {
            state.search = action.payload;
        }
    }
});

export const {
    setGenres,
    deleteGenres,
    setSearchStr
} = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
