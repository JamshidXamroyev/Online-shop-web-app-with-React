import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/data";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        filter: [], 
        singleProduct: JSON.parse(localStorage.getItem("singleProduct")) || storeData,
        loading: false,
        error: false
    },
    reducers: {
        filterProductsStart: (state) => {
            state.loading = true
        },

        filterProducts: (state, action) => {
            try {
                const filter = storeData.filter(product => product.type == action.payload)
                localStorage.setItem("FilteredProduct", JSON.stringify(filter))
                state.filter = JSON.parse(localStorage.getItem("FilteredProduct"))
            } catch (error) {
                console.log("Product Slice da Xato")
            }
            state.loading = false
        },

        removeProduct: (state) => {
            localStorage.removeItem("FilteredProduct")
            state.filter = []
        },

        singleProduct: (state, action) => {
            try {
                const oneProduct = storeData.filter(product => product.id === action.payload)
                const saveState = JSON.stringify(oneProduct)
                localStorage.setItem("singleProduct", saveState)
                state.singleProduct = JSON.parse(localStorage.getItem("singleProduct"))
            } catch (error) {
                console.log(error);
            }
        },
        filterGender: (state, action) => {
            try {
                const gender = state.filter.filter(product => product.gender === action.payload)
                state.error = false
                state.filter = gender
                const oneGender = gender.length > 0
                if(oneGender){
                    state.error = false
                    const saveState = JSON.stringify(gender)
                    localStorage.setItem("GenderFilter", saveState)
                } else{
                    state.error = true
                    state.filter = []
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export const {filterProducts, removeProduct, filterProductsStart, filterGender, singleProduct} = productSlice.actions
export default productSlice.reducer