import {
  MODAL_SHOW,
  MODAL_HIDE,
} from '../constants/index.js';

export function showModal(modalView, data = {}) {
  return {
    type: MODAL_SHOW,
    modalView,
    data,
  };
}

export function hideModal(isClear = false) {
  return {
    type: MODAL_HIDE,
    isClear,
  };
}
