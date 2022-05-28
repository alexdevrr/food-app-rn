import {AUTH_LOGIN, AUTH_LOGOUT, CREATE_USER} from '../types/index';

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

export const createUser = () => ({
  type: CREATE_USER,
});
