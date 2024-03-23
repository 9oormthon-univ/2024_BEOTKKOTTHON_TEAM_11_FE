import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice.js';
import appSlice from './appSlice.js';

const store = configureStore({
    reducer: {
        user: userSlice,
        app: appSlice,
    },
});

export default store;
