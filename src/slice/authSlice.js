import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("User")) || {
            name: "",
            password: "",
            image: "",
            authUser: false
        }
    },

    reducers: {
        login: (state, action) => {
            const userId = action.payload
            const userValidation = /^{a-zA-z}{4,10}$/.test(userId.name)
            const userPasswordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(userId.password)
            state.user = userId
            if(!userValidation || !userPasswordValidation){
                state.user.authUser = false 
            } else{
                const saveState = JSON.stringify(userId)
                localStorage.setItem("User",saveState)
                state.user.authUser = true 
            }
        },
        logout: (state, action) => {
            state.user = {
                name: "",
                password: "",
                image: "",
                authUser: false
            }
            localStorage.removeItem("User")
        }
    }
})

export const {login, logout} = cardSlice.actions
export default cardSlice.reducer