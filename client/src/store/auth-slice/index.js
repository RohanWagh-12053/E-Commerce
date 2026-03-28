import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
