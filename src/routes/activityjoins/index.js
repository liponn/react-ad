import React from 'react';
import ActivityJoins from '../../components/pages/ActivityJoins';

export default {

  path: '/ActivityJoins',
  children: [
    {
      path: '/',
      action(context) {
        return <ActivityJoins page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 活动参与记录');
    const component = await next();
    return component;
  },
};