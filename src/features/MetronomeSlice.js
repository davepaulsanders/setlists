import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bpm: 220,
};

const MetronomeSlice = createSlice({
  name: "MetronomeSlice",
  initialState,
  reducers: {
    changeBPM: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeBPM } = MetronomeSlice.actions;
export default MetronomeSlice.reducer;
