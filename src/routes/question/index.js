import React from 'react';
import Question from '../../components/pages/Question';

export default {

  path: '/Question',
  children: [
    {
      path: '/',
      action(context) {
        return <Question path="Question" page={+context.query.page || 1}/>;
      },
    },
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};