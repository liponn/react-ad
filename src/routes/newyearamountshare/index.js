import React from 'react';
import NewYearAmountShare from '../../components/pages/NewYearAmountShare';

export default {

  path: '/NewYearAmountShare',
  children: [
    {
      path: '/',
      action(context) {
        return <NewYearAmountShare page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 19年新年现金分享数据统计');
    const component = await next();
    return component;
  },
};