import React from 'react';

import Integral  from '../../components/pages/Integral';
export default {

  path: '/Integral',

  action(context) {
    return <Integral page={+context.query.page || 1} />;
  },
};
