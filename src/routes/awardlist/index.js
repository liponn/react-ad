import React from 'react';
import AwardList from '../../components/pages/AwardList';

export default {

  path: '/AwardList',
  children: [
    {
      path: '/',
      action(context) {
        return <AwardList page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 奖品发放记录');
    const component = await next();
    return component;
  },
};