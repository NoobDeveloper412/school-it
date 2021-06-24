import { LoginActionType } from "@typings/Login.reducer.types";

const initialState = {
  isLogged: false,
  refreshToken: null,
  accessToken: null,
  user: null,
};

const LoginReducer = (
  state = initialState,
  { type, payload }: LoginActionType
) => {
  switch (type) {
    case "LOGIN":
      return { ...state, isLogged: true };
    case "LOGOUT":
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

export default LoginReducer;
