import React from 'react';
import Welcome from '../../components/pages/Welcome';

export default {

  path: '/welcome',

  action() {
    return <Welcome />;
  },
};
