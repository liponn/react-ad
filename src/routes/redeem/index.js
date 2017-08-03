import React from 'react';
import Redeem from '../../components/pages/Redeem';

export default {

  path: '/Redeem',
  children: [
    {
      path: '/',
      action(context) {
        return <Redeem page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 兑换码');
    const component = await next();
    return component;
  },
};