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
function userLog(type,params,status,formData,queryObj) {
  // body...
  const logUri = getApi('USER_LOG');
  let logParams = {};
  if(formData){
      for(var pair of formData.entries()) {
      logParams[pair[0]] = pair[1];
    }
  }else{

    logParams = queryObj
  }
  let logFormData =  new FormData();
  logFormData.append('type',type);
  logFormData.append('data',JSON.stringify(logParams));
  const param = {
    method:'POST',
    credentials: 'include',
    body:logFormData
  };
  fetch(logUri , param);
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
  const params = {
    method,
    credentials: 'include',
  };

  if (method === 'POST') {
    params.body = formData;
  }
  return dispatch => {
    dispatch(fetchRequest(type));
    return fetch(requestUri + suffix + queryString, params)
      .then(response => response.json())
      .then(json => {
        if (json.error_code === 0) {
          dispatch(fetchSuccess(type, json.data, key));
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg, key));
        }
        userLog(type,params,json.error_code,formData,queryObj);//日志请求
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
  const params = {
    method,
    credentials: 'include',
  };
  if (method === 'POST') {
    params.body = formData;
  }
  return dispatch => {
    dispatch(fetchRequest(type));
    return fetch(requestUri + suffix + queryString, params)
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
