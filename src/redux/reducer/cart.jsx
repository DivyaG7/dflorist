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

      // Remove duplicates based on id
      state.list = Array.from(new Set(state.list.map(item => item.id))).map(id => state.list.find(item => item.id === id));
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
      const { index } = action.payload;
      state.list.splice(index, 1);
    },
    
  }
});

export const { addItem } = cartSlice.actions;

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
