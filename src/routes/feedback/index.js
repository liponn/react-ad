import React from 'react';
import Feedback from '../../components/pages/Feedback';

export default {

  path: '/Feedback',
  children: [
    {
      path: '/',
      action(context) {
        return <Feedback page={+context.query.page || 1}/>;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 用户反馈');
    const component = await next();
    return component;
  },
};