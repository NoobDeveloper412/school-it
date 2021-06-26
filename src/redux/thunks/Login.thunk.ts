import LoginService from "@services/Login.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

const LoginThunk = createAsyncThunk(
  "session/login_attempt",
  async (
    { login, password }: { login: string; password: string },
    thunkAPI
  ) => {
    const result = await LoginService.login(login, password);
    return result;
  }
);

export default LoginThunk;
