import React from 'react';

import OneYuan  from '../../components/pages/OneYuan';
export default {

  path: '/OneYuan',

  action(context) {
    return <OneYuan page={+context.query.page || 1} />;
  },
};
