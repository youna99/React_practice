import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../store/fetchShoppingResults";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});
