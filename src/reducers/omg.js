import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../constants/index.js';

export default function omg(state = null, action) {
  if (state === null) {
    return {
      initialNow: Date.now(),
      isFetching: {},
      errorMsg: {},
    };
  }
  switch (action.status) {
    case FETCH_REQUEST: {
      const nextState = {};
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: true });
      return Object.assign({}, state, nextState);
    }
    case FETCH_SUCCESS: {
      const nextState = {};
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: false });
      nextState.errorMsg = Object.assign({}, state.error_msg, { [action.type]: '' });
      if (action.key) {
        if (typeof state[action.type] === 'undefined') {
          nextState[action.type] = { [action.key]: action.data };
        } else {
          nextState[action.type] = Object.assign({}, state[action.type], { [action.key]: action.data });
        }
      } else {
        nextState[action.type] = action.data;
      }

      return Object.assign({}, state, nextState);
    }
    case FETCH_ERROR: {
      const nextState = {};
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: false });
      nextState.errorMsg = Object.assign({}, state.error_msg, { [action.type]: action.msg }) 
      return Object.assign({}, state, nextState);
    }
    default: {
      return state;
    }
  }
}