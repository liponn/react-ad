/**
 * Created by Wangli on 2016/6/14.
 */
import React from 'react';
import Startup from '../../components/pages/Startup';

export default {

  path: '/Startup',

  children: [
    {
      path: '/:type',
      action(context) {
        return <Startup type={context.params.type} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营平台 | 启动页管理');
    const component = await next();
    return component;
  },
};
