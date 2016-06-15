import fetch from '../core/fetch';
import { getApi } from '../config/omg';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../constants/index.js';

function fetchRequest(type) {
  return {
    type: type,
    status: FETCH_REQUEST,
  };
}

function fetchSuccess(type, data) {
  return {
    type: type,
    status: FETCH_SUCCESS,
    data,
  };
}

function fetchError(type, code, msg) {
  return {
    type: type,
    status: FETCH_ERROR,
    msg,
    code,
  };
}

export function commonFetch(type, method = 'GET', formData = false, suffix = '', queryObj = {}) {
  const requestUri = getApi(type);

  const keys = Object.keys(queryObj);
  const queryArr = keys.map(key => (`${key}=${queryObj[key]}`));
  let queryString = queryArr.join('&');
  if (queryString !== '') {
    queryString = `?${queryString}`;
  }
  
  return dispatch => {
    dispatch(fetchRequest(type));
    return fetch(requestUri + suffix + queryString, {
      method,
      body: formData,
    })
      .then(response => response.json())
      .then(json => {
        if (json.error_code === 0) {
          dispatch(fetchSuccess(type, json.data));
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg));
        }
        return json;
      });
  };

}
