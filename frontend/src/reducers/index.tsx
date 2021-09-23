import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
