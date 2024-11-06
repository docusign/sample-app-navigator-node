import { RootState } from '../..';

export const getIsAuthenticatedSelector = (state: RootState): boolean => {
  return state.auth.isAuthenticated;
};

export const getAccessTokenSelector = (state: RootState): string | null => {
  return state.auth.accessToken;
};
