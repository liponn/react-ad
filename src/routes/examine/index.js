import React from 'react';
import Examine from '../../components/pages/Examine';

export default {

  path: '/Examine',

  action(context) {
    return <Examine type="0" page={+context.query.page || 1} />;
  },
};