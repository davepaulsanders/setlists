import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Date.now(),
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
      console.log(action.payload.id);
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const { addSong, deleteSong } = SetListSlice.actions;
export default SetListSlice.reducer;
