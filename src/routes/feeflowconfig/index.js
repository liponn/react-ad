import React from 'react';
import Feeflowconfig from '../../components/pages/Feeflowconfig';

export default {

  path: '/Feeflowconfig',
  children: [
    {
      path: '/:type',
      action(context) {
        return <Feeflowconfig type={context.params.type} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};