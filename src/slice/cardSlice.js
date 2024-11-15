import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState: {
        card: [],
        ammount: 0,
        totalAmmount: 0,
        totalPrice: 0
    },

    reducers: {
        addToCard: (state, action) => {
            const productId = action.payload
            try {
                const exist = state.card.find(product => product.id === productId.id && product.size === productId.size && product.color === productId.color)
                if(exist){
                    exist.ammount++
                    exist.totalPrice += productId.price
                    state.totalAmmount++
                    state.totalPrice += productId.price
                } else{
                    state.card.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        img: productId.img,
                        text: productId.text,
                        ammount: 1,
                        totalPrice: productId.price,
                        name: productId.name,
                        color: productId.color
                    })
                    state.totalAmmount++;
                    state.totalPrice += productId.price
                }
            } catch (error) {
                return error
            }
        },
        removeFromTheCard: (state, action) => {
            const productId = action.payload
            try {
                const exist = state.card.find(product => product.id === productId.id && product.size === productId.size && product.color === productId.color)
                if(exist.ammount === 1){
                    state.card = state.card.filter(product => product.id != productId.id || product.size !== productId.size || product.color !== productId.color)
                    state.totalAmmount--;
                    state.totalPrice -= productId.price
                } else{
                    exist.ammount--;
                    exist.totalPrice -= productId.price;
                    state.totalAmmount --;
                    state.totalPrice -= productId.price
                }
            } catch (error) {
                return error
            }
        }
    }
})

export const {addToCard, removeFromTheCard} = cardSlice.actions
export default cardSlice.reducer