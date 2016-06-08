import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_ADD,
  ACTIVITY_DEL,
  ACTIVITY_GROUP_ADD,
  ACTIVITY_GROUP_INFO,
  ACTIVITY_GROUP_LIST,
  ACTIVITY_INDEX,
  ACTIVITY_INFO,
  ACTIVITY_OFFLINE,
  ACTIVITY_PUT,
  ACTIVITY_RELEASE,
} from '../constants/index.js';

export default function channel(state = null, action) {
  if (state === null) {
    return {
      initialNow: Date.now(),
      isFetching: {},
      items: [],
    };
  }
  switch (action.type) {
    /*
    case FETCHING: {
      const nextState = {};
      nextState.isFetching[action.action] = true;
      return Object.assign({}, state, nextState);
    }
    case ACTIVITY_LIST_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case ACTIVITY_LIST_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    }
    case ACTIVITY_GROUP_LIST: {
      if(action.error_code === 0) {
        return Object.assign({}, state, {
        });
      }
      if(action.status === REQUEST) {
        return Object.assign({}, state, {
          isFetching: true,
        });
      } else if (action.status === SUCCESS) {
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items,
        });
      }
  
    }
    */
    default: {
      return state;
    }
  }
}
