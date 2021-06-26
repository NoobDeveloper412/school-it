import { AUTH_SERVER_LOGIN_PATH } from "@config/urls";
import { AuthServerResponse } from "@typings/Login.service.types";
import axios from "axios";

export default new (class LoginService {
  login = async (login: string, password: string) => {
    const response = await axios.post<AuthServerResponse>(
      AUTH_SERVER_LOGIN_PATH,
      {
        login,
        password,
      }
    );

    return response.data;
  };

  refreshAccessToken = async (token: string) => {
    const response = await axios.post<Omit<AuthServerResponse, "refreshToken">>(
      AUTH_SERVER_LOGIN_PATH,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    return response.data;
  };
})();
