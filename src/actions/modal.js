import {
  MODAL_SHOW,
  MODAL_HIDE,
} from '../constants/index.js';

export function showModal(modalType, data = {}) {
  return {
    type: MODAL_SHOW,
    modalType,
    data,
  };
}

export function hideModal() {
  return {
    type: MODAL_HIDE,
  };
}
