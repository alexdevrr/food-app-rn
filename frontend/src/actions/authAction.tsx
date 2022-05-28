import {AUTH_LOGIN, AUTH_LOGOUT} from '../types/index';

// export const loginAction = (email: string, password: string) => ({

// });

export const loginAction = (email: string, name: string, rol: string) => ({
  type: AUTH_LOGIN,
  payload: {
    email,
    name,
    rol,
  },
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});
