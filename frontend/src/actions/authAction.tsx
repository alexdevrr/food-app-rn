import {AUTH_LOGIN, AUTH_LOGOUT} from '../types/index';

export const loginAction = (uid: string, displayName: string) => ({
  type: AUTH_LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});
