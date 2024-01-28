import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import counterReducer from "./counterSlice";
import { apiSlice } from "./apiSlice";


export const store = configureStore({
    reducer: {
        todos: todoReducer,
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})
