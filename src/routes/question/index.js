import React from 'react';
import Question from '../../components/pages/Question';

export default {

  path: '/Question',
  children: [
    {
      path: '/',
      action(context) {
        return <Question type='0' page={+context.query.page || 1}/>;
      },
    },
    {
      path: '/type/:typeId',
      action(context) {
        const typeId = context.params.typeId;
        return <Question type={typeId} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};