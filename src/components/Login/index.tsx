import { BsPerson, BsUnlock } from "react-icons/bs";
import {
  LabelIcon,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginWrapper,
} from "./styles";

import LoginThunk from "@thunks/Login.thunk";
import { Redirect } from "react-router-dom";
import useAppDispatch from "@hooks/useAppDispatch.hook";
import useAppSelector from "@hooks/useAppSelector.hook";
import { useState } from "react";

/**
 * Component's body
 */
const Login: React.FC<{}> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = useAppSelector((state) => state.session.isLogged);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(LoginThunk({ login, password }));
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        {!isLogged ? (
          <LoginForm>
            <LoginLabel>
              <LabelIcon>
                <BsPerson />
              </LabelIcon>
              <LoginInput
                onChange={(e) => setLogin(e.target.value)}
                name="username"
                type="text"
                placeholder="Login"
              />
            </LoginLabel>
            <LoginLabel>
              <LabelIcon>
                <BsUnlock />
              </LabelIcon>
              <LoginInput
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="••••••••"
              />
            </LoginLabel>
            <LoginButton type="button" onClick={handleClick}>
              Sign in
            </LoginButton>
          </LoginForm>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
