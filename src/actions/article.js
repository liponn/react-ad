import fetch from '../core/fetch';
import { apiHost } from '../config';

import {
  ARTICLE_TYPE_LIST,
  ARTICLE_TYPE_ADD,
  ARTICLE_TYPE_DEL,
  ARTICLE_TYPE_PUT,
  ARTICLE_TYPE_INFO,
  ARTICLE_PUT,
  ARTICLE_ADD,
  ARTICLE_LIST,
  ARTICLE_DEL,
  ARTICLE_DETAIL,
  ARTICLE_DETAIL_BY_ALIAS,
} from '../constants/index.js';


// 添加文章
export function articleTypeAddFetch(formData) {
  return dispatch => {
    dispatch(() => ({
      type: ARTICLE_TYPE_ADD,
      status: 'request',
    }));
    return fetch(`${apiHost}/cms/content/type-add`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(json => dispatch(() => ({
        type: ARTICLE_TYPE_ADD,
        status: 'success',
        data: json,
        receiveAt: Date.now(),
      })));
  };
}

