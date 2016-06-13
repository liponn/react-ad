import React from 'react';
import RedEnvelope from '../../components/pages/RedEnvelope';

export default {

  path: '/Award',
  children: [
    {
      path: '/RedEnvelope',
      action() {
        return <RedEnvelope />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};