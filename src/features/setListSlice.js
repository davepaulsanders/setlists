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
        title: action.payload.title,
        bpm: action.payload.bpm,
      };
      state.setlist.push(newSong);
    },
  },
});

export const { addSong } = SetListSlice.actions;
export default SetListSlice.reducer;
