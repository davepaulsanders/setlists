import { configureStore } from "@reduxjs/toolkit";
import SetListSlice from "../features/setListSlice";
import MetronomeSliceReducer from "../features/MetronomeSlice";
export const store = configureStore({
  reducer: {
    setlist: SetListSlice,
    MetronomeSlice: MetronomeSliceReducer,
  },
});
