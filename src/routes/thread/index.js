import React from 'react';
import Thread from '../../components/pages/Thread';

export default {

  path: '/thread',

  action({ context }) {
    context.setTitle('运营后台 | 社区管理');
    return <Thread />;
  },
};
