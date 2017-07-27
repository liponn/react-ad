import React from 'react';
import Feefloworder from '../../components/pages/Feefloworder';

export default {

  path: '/Feefloworder',
  children: [
    {
      path: '/:type',
      action(context) {
        return <Feefloworder type={context.params.type} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};