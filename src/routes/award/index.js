import React from 'react';
import RedEnvelope from '../../components/awards/RedEnvelope';

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