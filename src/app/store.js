import { configureStore } from "@reduxjs/toolkit";
import SetListSlice from "../features/setListSlice";
export const store = configureStore({
  reducer: {
    setlist: SetListSlice,
  },
});
