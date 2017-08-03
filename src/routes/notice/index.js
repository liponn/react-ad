import React from 'react';
import Notice from '../../components/pages/Notice';

export default {

  path: '/Notice',
  children: [
    {
      path: '/',
      action(context) {
        return <Notice page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 公告管理');
    const component = await next();
    return component;
  },
};