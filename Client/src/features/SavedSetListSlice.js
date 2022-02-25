import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    key: Date.now(),
    id: Date.now(),
    title: "Church Street Blues",
    bpm: 150,
  },
];

const SavedSetListSlice = createSlice({
  name: "SavedSetListSlice",
  initialState,
  reducers: {},
});

export default SavedSetListSlice.reducer;
