import React from 'react';
import Category from '../../components/pages/Category';

export default {

  path: '/Category',
  children: [
    {
      path: '/',
      action(context) {
         return <Category page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};