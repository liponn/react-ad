/**
 * Created by Wangli on 2016/6/14.
 */
import React from 'react';
import AppUpdate from '../../components/pages/AppUpdate';

export default {

  path: '/appupdate',

  children: [
    {
      path: '/:type',
      action(context) {
        return <AppUpdate type={+context.params.type} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营平台 | app升级配置');
    const component = await next();
    return component;
  },
};
