export type SessionInitialState = {
  isLogged: boolean;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpiry: number | null;
};
