import {createStore, combineReducers} from 'redux';
import loginReducer from './loginReducer';

let reducers = combineReducers ({
  loginReducer,
});

let store = createStore (reducers);

export default store;
