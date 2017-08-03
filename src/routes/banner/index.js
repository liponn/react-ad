/**
 * Created by Wangli on 2016/6/14.
 */
import React from 'react';
import Banner from '../../components/pages/Banner';

export default {

  path: '/Banner',

  children: [
    {
      path: '/:type',
      action(context) {
        return <Banner path="Banner" type={context.params.type} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};
