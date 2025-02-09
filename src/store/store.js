import { configureStore } from "@reduxjs/toolkit";
import examReducer from "./examSlice"
import examAnswerReducer from "./examAnswerSlice"
import { apiSlice } from "./apiSlice";
import modalSlice from "./modalSlice"
import authReducer from "./authSlice"
const store = configureStore({
    reducer : {
        exam :examReducer,
        examAnswer : examAnswerReducer, 
        modal : modalSlice,
        auth : authReducer,
        [apiSlice.reducerPath] : apiSlice.reducer, 
    }, 

    middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware)
})


export default store