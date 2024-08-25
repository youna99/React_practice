// features/shopping/shoppingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchNaverShopping } from "../api/searchNaverShopping ";

// 네이버 쇼핑 API를 호출하는 async thunk
export const fetchShoppingResults = createAsyncThunk(
  "shopping/fetchResults",
  async (query, thunkAPI) => {
    try {
      const data = await searchNaverShopping(query);
      console.log("data >>", data);

      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchShoppingResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default shoppingSlice.reducer;
