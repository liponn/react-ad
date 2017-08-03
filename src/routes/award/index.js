import React from 'react';
import Award from '../../components/pages/Award';

export default {

  path: '/Award',
  children: [
    {
      path: '/:type',
      action(context) {
        return <Award type={context.params.type} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};