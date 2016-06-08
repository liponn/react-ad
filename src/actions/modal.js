import {
  MODAL_SHOW,
  MODAL_HIDE,
} from '../constants/index.js';

export function showModal(modalType) {
  return {
    type: MODAL_SHOW,
    modalType,
  };
}

export function hideModal() {
  return {
    type: MODAL_HIDE,
  };
}
