import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/data";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        filter: JSON.parse(localStorage.getItem("FilterProduct")) || storeData
    },
    reducers: {
        filterProducts: (state, action) => {
            try {
                const filter = storeData.filter(product => product.type === action.payload)
                const saveState = JSON.stringify(filter)
                localStorage.setItem("FilterProduct", saveState)
            } catch (error) {
                console.log("Product Slice da Xato")
            }
        }
    }
})

export const {filterProducts} = productSlice.actions
export default productSlice.reducer