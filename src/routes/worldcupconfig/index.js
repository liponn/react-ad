import React from 'react';
import Worldcupconfig from '../../components/pages/Worldcupconfig';

export default {

  path: '/worldcupconfig',
  children: [
    {
      path: '/',
      action(context) {
        return <Worldcupconfig page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 世界杯球队配置');
    const component = await next();
    return component;
  },
};