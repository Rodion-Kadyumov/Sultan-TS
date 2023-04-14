import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '../reducers/basket';
import cardReducer from '../reducers/fullCard';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    card: cardReducer,
  }
})