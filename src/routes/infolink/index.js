import React from 'react';
import InfoLink from '../../components/pages/InfoLink';

export default {

  path: '/InfoLink',
  children: [
    {
      path: '/:type',
      action(context) {
        return <InfoLink path="InfoLink" type={context.params.type} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};