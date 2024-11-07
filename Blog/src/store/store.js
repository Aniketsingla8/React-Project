import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./authSlice.js"
const store = configureStore({
    reducer: {
        auth : authSlice,
        //Todo: add more slices here for posts 
    }
});

export default store;