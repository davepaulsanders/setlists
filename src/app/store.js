import { configureStore } from "@reduxjs/toolkit";
import SetListSlice from "../features/setListSlice";
import MetronomeSlice from "../features/MetronomeSlice";
export const store = configureStore({
  reducer: {
    setlist: SetListSlice,
    metronome: MetronomeSlice,
  },
});
