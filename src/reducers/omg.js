import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ACCOUNT_LOGOUT,
} from '../constants/index.js';

function initState() {
  return {
    initialNow: Date.now(),
    isFetching: {},
    errorMsg: {},
    logs: [],
    lastAction: {}
  };
}
export default function omg(state = null, action) {
  if (state === null) {
    return initState();
  }
  const nextState = {};
  if (action.status) {
    const logs = state.logs;
    nextState.logs = logs;
    nextState.statues = action.status;
    nextState.lastAction = action;
  }
  switch (action.status) {
    case FETCH_REQUEST: {
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: true });
      nextState.lastRequest = action.type;
      return Object.assign({}, state, nextState);
    }
    case FETCH_SUCCESS: {
      // 根据type特殊处理
      switch (action.type) {
        case ACCOUNT_LOGOUT:
          return initState();
        default:
      }
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: false });
      nextState.errorMsg = Object.assign({}, state.error_msg, { [action.type]: '' });
      if (action.key !== false) {
        if (typeof state[action.type] === 'undefined') {
          nextState[action.type] = { [action.key]: action.data };
        } else {
          nextState[action.type] = Object.assign({}, state[action.type], { [action.key]: action.data });
        }
      } else {
        nextState[action.type] = action.data;
      }
      nextState.status = 0;

      return Object.assign({}, state, nextState);
    }
    case FETCH_ERROR: {
      nextState.isFetching = Object.assign({}, state.isFetching, { [action.type]: false });
      nextState.errorMsg = Object.assign({}, state.error_msg, { [action.type]: action.msg });
      nextState.lastErrorMsg = action.msg;
      nextState.status = 2;
      return Object.assign({}, state, nextState);
    }
    default: {
      return state;
    }
  }
}