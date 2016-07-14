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
import Wrapper from '../components/layouts/Wrapper'

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
import startup from './startup';

export default {

  path: '/',

  children: [
    startup,
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
    let name = '';
    if (component.type && component.type.WrappedComponent && component.type.WrappedComponent.displayName) {
      name = component.type.WrappedComponent.displayName;
    }
    console.log(name);
    switch (name) {
      case 'Login':
        return render(
          <Wrapper context={context} >{component}</Wrapper>
        );
      default:
        return render(
          <App context={context}>{component}</App>
        );
    }

  },

};
