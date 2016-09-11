import React from 'react';
import Admin from '../../components/pages/Admin';

export default {

  path: '/Admin',
  children: [
    {
      path: '/',
      action(context) {
        return <Admin page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 权限管理');
    const component = await next();
    return component;
  },
};