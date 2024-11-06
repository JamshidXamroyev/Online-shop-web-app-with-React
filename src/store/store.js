import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from '../slice/sliderSlice'
import filterProductSlice from '../slice/productSlice'

export const store = configureStore({
    reducer: {
        slider: sliderSlice,
        filter: filterProductSlice,
    },
})


