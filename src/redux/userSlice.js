import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',

    initialState: {
        access_token: null,
        refresh_token: null,
        name: null,
    },

    reducers: {
        login: (state, action) => {
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            state.name = action.payload.name;
        },
        logout: (state) => {
            state.access_token = null;
            state.refresh_token = null;
            state.name = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectIsLoggedIn = (state) => state.user.access_token !== null;
export const selectToken = (state) => state.user.access_token;

export default userSlice.reducer;
