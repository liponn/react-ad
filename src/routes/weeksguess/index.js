import React from 'react';

import WeeksGuess  from '../../components/pages/WeeksGuess';
export default {
  path: '/WeeksGuess',

  action(context) {
    return <WeeksGuess page={+context.query.page || 1} />;
  },
};
