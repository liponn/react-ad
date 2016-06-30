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
import Login from '../components/layouts/Login'

// Child routes
import activity from './activity';
import home from './home';
import content from './content';
import error from './error';
import channel from './channel';
import award from './award';
import article from './article';
import banner from './banner';
import login from './login';

export default {

  path: '/',

  children: [
    login,
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
    if (React.isValidElement(component)) {
      return render(
        <App context={context}>{component}</App>
      );
    }
    if (component.constructor === String) {
      switch (component) {
        case 'login' :
          return render(
            <Login />
          );
        default:
          break;
      }
    }

  },

};
