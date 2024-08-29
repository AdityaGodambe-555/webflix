import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    changeTheLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeTheLanguage } = configSlice.actions;
export default configSlice.reducer;
