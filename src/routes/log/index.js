import React from 'react';
import Log from '../../components/pages/Log';

export default {

  path: '/Log',
  children: [
    {
      path: '/',
      action(context) {
        return <Log page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 日志');
    const component = await next();
    return component;
  },
};