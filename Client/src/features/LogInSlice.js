import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logIn: false,
};

const LogInSlice = createSlice({
  name: "LogInSlice",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.logIn = action.payload;
    },
  },
});

export const { setLogIn } = LogInSlice.actions;
export default LogInSlice.reducer;
