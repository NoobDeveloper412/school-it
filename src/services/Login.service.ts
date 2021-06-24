import { AUTH_SERVER_LOGIN_PATH, AUTH_SERVER_URL } from "@config/urls";

import { AuthServerResponse } from "@typings/Login.service.types";
import axios from "axios";

export default class LoginService {
  login = async (login: string, password: string) => {
    const response = axios.post<AuthServerResponse>(
      `${AUTH_SERVER_URL}${AUTH_SERVER_LOGIN_PATH}`
    );

    console.log(response);
  };

  refreshAccessToken = async (token: string) => {
    const response = axios.post<Omit<AuthServerResponse, "refreshToken">>(
      `${AUTH_SERVER_URL}${AUTH_SERVER_LOGIN_PATH}`
    );

    console.log(response);
  };
}
