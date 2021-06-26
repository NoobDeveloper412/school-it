import LoginThunk from "@thunks/Login.thunk";
import RefreshAccessTokenThunk from "@thunks/RefreshAccessToken.thunk";
import { SessionInitialState } from "@typings/Session.slice.types";
import { createSlice } from "@reduxjs/toolkit";
import runLoginFailedSideEffects from "@sideeffects/Login.failed.sideeffect";
import runLoginSuccessSideEffects from "@sideeffects/Login.success.sideeffect";

const initialState = {
  isLogged: false,
  refreshToken: null,
  accessToken: null,
  accessTokenExpiry: null,
} as SessionInitialState;

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    /** Development-only action */
    login: {
      reducer: (state, action) => {
        return { ...state, ...action.payload, isLogged: true };
      },
      prepare: (state) => state,
    },
    logout: {
      reducer: (state, action) => {
        return { ...state, ...action.payload, isLogged: false };
      },
      prepare: (state) => state,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginThunk.fulfilled, (state, action) => {
      runLoginSuccessSideEffects();
      return { ...state, ...action.payload, isLogged: true };
    });
    builder.addCase(LoginThunk.rejected, (state, action) => {
      runLoginFailedSideEffects();
      return { ...state };
    });
    builder.addCase(RefreshAccessTokenThunk.fulfilled, (state, action) => {
      return { ...state, ...action.payload, isLogged: true };
    });
    builder.addCase(RefreshAccessTokenThunk.rejected, (state, action) => {
      return { ...state, isLogged: false };
    });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
