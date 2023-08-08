import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    displayName: null,
    stateChange: null,
    email: null,
    photoURL: null,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      displayName: payload.displayName,
      email: payload.email,
      photoURL: payload.photoURL,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authLogOut: () => authSlice.initialState,
  },
});
