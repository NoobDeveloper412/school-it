import { AUTH_SERVER_LOGIN_PATH, AUTH_SERVER_URL } from "@config/urls";

import { AuthServerResponse } from "@typings/Login.service.types";
import axios from "axios";

export default new (class LoginService {
  login = async (login: string, password: string) => {
    const response = await axios.post<AuthServerResponse>(
      `${AUTH_SERVER_URL}${AUTH_SERVER_LOGIN_PATH}`,
      {
        login,
        password,
      }
    );

    console.log(response.data);

    return true;
  };

  refreshAccessToken = async (token: string) => {
    const response = await axios.post<Omit<AuthServerResponse, "refreshToken">>(
      `${AUTH_SERVER_URL}${AUTH_SERVER_LOGIN_PATH}`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    console.log(response.data);

    return true;
  };
})();
