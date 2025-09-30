import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:{}
}

const viewsSlice = createSlice({
  name: "views",
  initialState,
  reducers: {
    incrementView: (state, action) => {
      const productId = action.payload;
      if (state.items[productId]) {
        state.items[productId] += 1;
      } else {
        state.items[productId] = 1;
      }
    }
  }
});

export const { incrementView } = viewsSlice.actions;
export default viewsSlice.reducer;