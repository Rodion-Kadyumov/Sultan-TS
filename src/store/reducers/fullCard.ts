import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: {}
  },
  reducers: {
    detailProduct (state, action) {
      state.card = action.payload
    }
  }
})

export const { detailProduct } = cardSlice.actions
export default cardSlice.reducer