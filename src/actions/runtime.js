import { SET_RUNTIME_VARIABLE, SET_HOST } from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export function setHost({name, value}) {
  return {
    type: SET_HOST,
    payload: {
      name,
      value,
    },
  };
}
