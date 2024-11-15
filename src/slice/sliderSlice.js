import { createSlice } from '@reduxjs/toolkit'

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: 3
  },
  reducers: {
    nextSlide(state, action){
        state.value = action.payload > state.length ? 0 : action.payload;
    },
    prevSlide(state, action){
        state.value = action.payload < 0 ? 3 : action.payload;
    },
    dotSlide(state, action){
      const slide = action.payload;
      state.value = slide;
    },
  }
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions
export default sliderSlice.reducer
