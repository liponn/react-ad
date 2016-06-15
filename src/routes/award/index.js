import React from 'react';
import Award from '../../components/pages/Award';

export default {

  path: '/Award',
  children: [
    {
      path: '/:awardType',
      action(context) {
        return <Award awardType={context.params.awardType} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};