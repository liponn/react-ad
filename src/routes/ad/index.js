import React from 'react';
import Ad from '../../components/pages/Ad';

export default {

  path: '/Ad',
  children: [
    {
      path: '/:type',
      action(context) {
        return <Ad path="Ad" type={context.params.type} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};