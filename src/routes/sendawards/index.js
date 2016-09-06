import React from 'react';
import SendAwards from '../../components/pages/SendAwards';

export default {

  path: '/SendAwards',
  children: [
    {
      path: '/',
      action(context) {
        return <SendAwards page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 批量发送奖品');
    const component = await next();
    return component;
  },
};