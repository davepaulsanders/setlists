import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bpm: Number(220),
  isRunning: false,
};

const MetronomeSlice = createSlice({
  name: "MetronomeSlice",
  initialState,
  reducers: {
    changeBPM: (state, action) => {
      state.bpm = action.payload;
    },
    changeIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const { changeBPM, changeIsRunning } = MetronomeSlice.actions;
export default MetronomeSlice.reducer;
