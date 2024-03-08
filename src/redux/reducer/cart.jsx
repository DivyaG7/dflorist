// cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.list.push(newItem);
    },
    incrementQuantity: (state, action) => {
      const { index } = action.payload;
      state.list[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const { index } = action.payload;
      if (state.list[index].quantity > 1) {
        state.list[index].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  }});

export const { addItem } = cartSlice.actions;

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
