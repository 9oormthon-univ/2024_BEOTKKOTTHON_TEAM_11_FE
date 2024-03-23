import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',

    initialState: {
        title: null,
    },

    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        clear: (state) => {
            state.title = null;
        },
    },
});

export const { setTitle, clear } = appSlice.actions;

export const selectTitle = (state) => state.app.title;

export default appSlice.reducer;
