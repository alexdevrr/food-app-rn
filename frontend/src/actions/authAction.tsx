import {AUTH_LOGIN, AUTH_LOGOUT} from '../types/index';

// export const loginAction = (email: string, password: string) => ({

// });

export const loginAction = (email: string, name: string) => ({
  type: AUTH_LOGIN,
  payload: {
    email,
    name,
  },
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});
