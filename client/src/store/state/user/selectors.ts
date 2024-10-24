import { RootState } from '../..';
import { Lang, UserType } from '../../../types';

export const getLanguagesSelector = (state: RootState): Lang => {
  return state.user?.lang ?? Lang.en;
};
export const getUserSelector = (state: RootState): UserType | undefined => {
  return state.user?.user;
};
