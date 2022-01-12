import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Date.now(),
    title: "Church Street Blues",
    bpm: 150,
  },
];

const SetListSlice = createSlice({
  name: "SetListSlice",
  initialState,
  reducers: {
    addSong: (state, action) => {
      const existsInArray = state.some(
        (song) => song.title === action.payload.title
      );
      if (existsInArray) {
        window.alert("Already in setlist!");
        return;
      }
      console.log(existsInArray);
      const newSong = {
        id: Date.now(),
        title: action.payload.title,
        bpm: action.payload.bpm,
      };
      state.push(newSong);
    },
    deleteSong: (state, action) => {
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const { addSong, deleteSong } = SetListSlice.actions;
export default SetListSlice.reducer;
