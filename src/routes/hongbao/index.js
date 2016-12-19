import React from 'react';

import HongBao from '../../components/pages/HongBao';
export default {

  path: '/HongBao',

  action(context) {
    return <HongBao page={+context.query.page || 1} />;
  },
};
