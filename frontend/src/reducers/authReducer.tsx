import {AUTH_LOGIN, AUTH_LOGOUT} from '../types/index';

import {authInterface} from '../interfaces/authInterfaces';

const intialState: authInterface = {
  uid: '',
  displayName: '',
};

export const authReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case AUTH_LOGOUT:
      return {};

    default:
      return state;
  }
};
