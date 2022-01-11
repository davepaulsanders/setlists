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
      return (state = action.payload);
    },
  },
});

export const { changeBPM } = MetronomeSlice.actions;
export default MetronomeSlice.reducer;
