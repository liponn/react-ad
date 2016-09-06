import React from 'react';
import Article from '../../components/pages/Article';
import ArticleType from '../../components/pages/ArticleType';

export default {

  path: '/Article',
  children: [
    {
      path: '/',
      action() {
        return <Article />;
      },
    },
    {
      path: '/Type',
      action() {
        return <ArticleType />;
      },
    },
    {
      path: '/:firId',
      action(context) {
        return <Article firId={+context.params.firId} page={+context.query.page || 1} />;
      },
    },
    {
      path: '/:firId/:secId',
      action(context) {
        return <Article firId={+context.params.firId} page={+context.query.page || 1} secId={+context.params.secId} />;
      },
    },

  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};