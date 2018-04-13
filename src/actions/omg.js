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
function userLog(type,params,status,formData) {
  // body...
  const logUri = getApi('USER_LOG');
  let regex = new RegExp("LIST");//正则匹配list 不需要记录的日志
  let regexResult  = regex.exec(type);
  let logParams = {};
  for(var pair of formData.entries()) {
   logParams[pair[0]] = pair[1]; 
 }
  let logFormData =  new FormData();
  logFormData.append('type',type);
  logFormData.append('data',JSON.stringify(logParams));
  const param = {
    method:'POST',
    credentials: 'include',
    body:logFormData
  };
  fetch(logUri , param)
  .then(response => response.json())
  .then(json=>{
    console.log('json',json);
  });
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
          if(formData){
            userLog(type,params,1,formData);
          }
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg, key));
          if(formData){
            userLog(type,params,0,formData);
          }
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
