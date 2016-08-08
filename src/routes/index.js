/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/layouts/App';

// Child routes
import activity from './activity';
import home from './home';
import content from './content';
import error from './error';
import channel from './channel';
import award from './award';
import article from './article';
import banner from './banner';
import startup from './startup';
import awardsend from './awardsend';
import appupdate from './appupdate';
import feedback from './feedback';
import notice from './notice';

export default {

  path: '/',

  children: [
    notice,
    feedback,
    appupdate,
    awardsend,
    startup,
    activity,
    channel,
    award,
    banner,
    article,
    home,
    content,
    error,
  ],

  async action({ next, render, context, path }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
