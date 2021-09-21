import {CAR_FAV_FOOD} from '../types/index';

const initialState = {
  idHamburger: '',
};

export const carReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CAR_FAV_FOOD:
      return {
        ...state,
        idHamburger: action.payload,
      };

    default:
      return state;
  }
};

export default carReducer;
