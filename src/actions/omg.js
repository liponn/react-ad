import fetch from '../core/fetch';
import { getApi } from '../config/omg';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../constants/index.js';

function fetchRequest(type) {
  return {
    type,
    status: FETCH_REQUEST,
  };
}

function fetchSuccess(type, data, key = false) {
  return {
    type,
    status: FETCH_SUCCESS,
    data,
    key,
  };
}

function fetchError(type, code, msg, key = false) {
  return {
    type,
    status: FETCH_ERROR,
    msg,
    code,
    key,
  };
}

export function fetchAction({
  type,
  method = 'GET',
  formData = false,
  suffix = '',
  queryObj = {},
  key = false,
}) {
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
      credentials: 'include',
    })
      .then(response => response.json())
      .then(json => {
        if (json.error_code === 0) {
          dispatch(fetchSuccess(type, json.data, key));
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg, key));
        }
        return json;
      });
  };
}

export function commonFetch(type, method = 'GET', formData = false, suffix = '', queryObj = {}) {
  console.log('commonFetch方法不建议使用,请使用fetchAction方法');
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
