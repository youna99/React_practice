import { createSlice } from "@reduxjs/toolkit";

// 1. 슬라이스 객체 정의
const likedSlice = createSlice({
  name: "liked",
  initialState: {},
  reducers: {
    changeLiked: (state, action) => {
      const itemId = action.payload;
      state[itemId] = !state[itemId];
    },
  },
});

export const { changeLiked } = likedSlice.actions;
export default likedSlice.reducer;
