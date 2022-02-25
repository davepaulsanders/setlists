import { configureStore } from "@reduxjs/toolkit";
import SetListSlice from "../features/setListSlice";
import MetronomeSliceReducer from "../features/MetronomeSlice";
import SavedSetListSlice from "../features/SavedSetListSlice";
import LogInSlice from "../features/LogInSlice";
export const store = configureStore({
  reducer: {
    setlist: SetListSlice,
    MetronomeSlice: MetronomeSliceReducer,
    LogInSlice: LogInSlice,
    SavedSetListSlice: SavedSetListSlice,
  },
});
