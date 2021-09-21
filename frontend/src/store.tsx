import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Reducer combinado se le puede poner cualquier nombre
import reducer from './reducers/index';

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
