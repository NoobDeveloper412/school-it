import LoginService from "@services/Login.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

const RefreshAccessTokenThunk = createAsyncThunk(
  "session/refresh_access_token_attempt",
  async ({ refreshToken }: { refreshToken: string }, thunkAPI) => {
    const result = await LoginService.refreshAccessToken(refreshToken);
    return result;
  }
);

export default RefreshAccessTokenThunk;
