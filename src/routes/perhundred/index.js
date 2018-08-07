import React from 'react';

import PerHundred  from '../../components/pages/PerHundred';
export default {

  path: '/PerHundred',

  action(context) {
    return <PerHundred page={+context.query.page || 1} />;
  },
};
