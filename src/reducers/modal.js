import {
  MODAL_SHOW,
  MODAL_HIDE,
} from '../constants/index.js';

export default function modal(state = null, action) {
  if (state === null) {
    return {
      showStatus: false,
      title: '确认',
      initialNow: Date.now(),
      modalView: {},
    };
  }
  switch (action.type) {
    case MODAL_SHOW: {
      return Object.assign({}, state, {
        showStatus: true,
        modalView: action.modalView,
        data: action.data
      });
    }
    case MODAL_HIDE: {
      return Object.assign({}, state, {
        showStatus: false,
      });
    }
    default: {
      return state;
    }
  }
}