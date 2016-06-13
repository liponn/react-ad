import React from 'react';
import Channel from '../../components/pages/Channel';

export default {

  path: '/channel',

  action() {
    return <Channel />;
  },
  children: [
    {
      path: '/:type',
      action() {
        return <Channel />;
      },
    },
  ],
};
