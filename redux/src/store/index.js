// 2. store 생성

import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
import likedReducer from "./LikedSlice";

const store = configureStore({
  reducer: {
    bank: bankReducer,
    liked: likedReducer,
  },
});

export default store;
