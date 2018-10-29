import React from 'react';
import Returncash from '../../components/pages/Returncash';

export default {

  path: '/returncash/:type',
  action(context) {
    return <Returncash type={context.params.type} page={+context.query.page || 1} />;
  },    
};

