export type AuthServerResponse = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry?: number;
};
