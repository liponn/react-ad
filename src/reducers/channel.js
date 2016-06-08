import {
  CHANNEL_LIST_REQUEST,
  CHANNEL_LIST_SUCCESS,
} from '../constants/index.js';

export default function channel(state = null, action) {
  if (state === null) {
    return {
      initialNow: Date.now(),
    };
  }
  switch (action.type) {
    case CHANNEL_LIST_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case CHANNEL_LIST_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    }
    default: {
      return state;
    }
  }
}

