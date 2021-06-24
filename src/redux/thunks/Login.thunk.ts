import { LoginFailed, LoginSuccess } from "@actions/Login.actions";

import { Dispatch } from "redux";
import LoginService from "@services/Login.service";
import { push } from "connected-react-router";

const LoginThunk = (login: string, password: string) => {
  return (dispatch: Dispatch) => {
    return LoginService.login(login, password)
      .then((result) => {
        dispatch(push("/dashboard"));
        dispatch(LoginSuccess);
      })
      .catch((err) => dispatch(LoginFailed));
  };
};

export default LoginThunk;
