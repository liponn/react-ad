import React from 'react';
import Examine from '../../components/pages/Examine';

export default {
  path: '/Examine',
  children: [
    {
      path: '/:typeId',
      action(context) {
        const typeId = +context.params.typeId;
        return <Examine typeId={typeId} page={+context.query.page || 1}/>;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};