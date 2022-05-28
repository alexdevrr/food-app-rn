import {AUTH_LOGIN, AUTH_LOGOUT} from '../types/index';

import {authInterface} from '../interfaces/authInterfaces';

const intialState: authInterface = {
  displayName: '',
  email: '',
  rol: '',
};

export const authReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        email: action.payload.email,
        name: action.payload.name,
        rol: action.payload.rol,
      };

    case AUTH_LOGOUT:
      return {};

    default:
      return state;
  }
};
