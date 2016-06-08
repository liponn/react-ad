import fetch from '../core/fetch';
import { apiHost } from '../config';

import {
  CHANNEL_LIST_REQUEST,
  CHANNEL_LIST_SUCCESS,
} from '../constants/index.js';


function channelListRequest() {
  return {
    type: CHANNEL_LIST_REQUEST,
  };
}

function channelListSuccess(json) {
  return {
    type: CHANNEL_LIST_SUCCESS,
    items: json.data,
    receiveAt: Date.now(),
  };
}

export function channelListFetch() {
  return dispatch => {
    dispatch(channelListRequest());
    return fetch(apiHost + '/channel/list')
      .then(response => response.json())
      .then(json => dispatch(channelListSuccess(json)));
  };
}
