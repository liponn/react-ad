import React from 'react';
import Idiom from '../../components/pages/Idiom';

export default {

  path: '/idiom',

  action(context) {
    return <Idiom page={+context.query.page || 1} />;
  },
};
