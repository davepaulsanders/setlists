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
  reducers: {
    addSong: (state, action) => {
      const newSong = {
        id: Date.now(),
        title: action.payload.title,
        bpm: action.payload.bpm,
      };
      state.push(newSong);
    },
    deleteSong: (state, action) => {
      state.filter((song) => song !== action.payload.id);
    },
  },
});

export const { addSong, deleteSong } = SetListSlice.actions;
export default SetListSlice.reducer;
