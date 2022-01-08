import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "song1",
    bpm: 150,
  },
];

const SetListSlice = createSlice({
  name: "SetListSlice",
  initialState,
  reducers: {},
});

export const {} = SetListSlice.actions;
export default SetListSlice.reducer;
