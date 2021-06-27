import LoginThunk from "@thunks/Login.thunk";
import RefreshAccessTokenThunk from "@thunks/RefreshAccessToken.thunk";
import { SessionInitialState } from "@typings/Session.slice.types";
import { createSlice } from "@reduxjs/toolkit";
import sideeffects from "@sideeffects/Sideeffects.manager";

const initialState = {
  isLogged: false,
  refreshToken: null,
  accessToken: null,
  accessTokenExpiry: null,
} as SessionInitialState;

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    /** Development-only action */
    login: {
      reducer: (state, action) => {
        return { ...state, ...action.payload, isLogged: true };
      },
      prepare: (state) => state,
    },
    logout: () => {
      sideeffects.logout.success();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginThunk.fulfilled, (state, action) => {
      sideeffects.login.success();
      return { ...state, ...action.payload, isLogged: true };
    });
    builder.addCase(LoginThunk.rejected, (state, action) => {
      sideeffects.login.failed();
      return initialState;
    });
    builder.addCase(RefreshAccessTokenThunk.fulfilled, (state, action) => {
      sideeffects.refreshAccessToken.success();
      return { ...state, ...action.payload, isLogged: true };
    });
    builder.addCase(RefreshAccessTokenThunk.rejected, (state, action) => {
      sideeffects.refreshAccessToken.failed();
      return initialState;
    });
  },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
