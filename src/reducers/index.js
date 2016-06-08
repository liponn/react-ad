import { combineReducers } from 'redux';
import runtime from './runtime';
import omg from './omg';
import modal from './modal';

export default combineReducers({
  omg,
  modal,
  runtime,
});
