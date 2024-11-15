import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from '../slice/sliderSlice'
import filterProductSlice from '../slice/productSlice'
import cardSlice from "../slice/cardSlice";
import AuthSlice from '../slice/authSlice'

export const store = configureStore({
    reducer: {
        slider: sliderSlice,
        filter: filterProductSlice,
        card: cardSlice,
        auth: AuthSlice,
    },
})


