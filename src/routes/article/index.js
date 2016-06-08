import React from 'react';
import Article from '../../components/Article';
import ArticleType from '../../components/ArticleType';

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
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};