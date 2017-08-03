import React from 'react';
import Channel from '../../components/pages/Channel';

export default {

  path: '/channel',

  action(context) {
    return <Channel page={+context.query.page || 1} />;
  },
};
