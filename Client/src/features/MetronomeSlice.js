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
      //Can't figure out how to properly update the state
    },
    changeIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const { changeBPM, changeIsRunning } = MetronomeSlice.actions;
export default MetronomeSlice.reducer;
