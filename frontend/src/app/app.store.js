import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice"
import productReducer from "../features/product/states/productSlice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})