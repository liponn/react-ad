/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { Card, Input, Submit } from '../../tools';

import { Provider } from 'react-redux';

class Wrapper extends Component {
  static propTypes = {
    context: PropTypes.shape({
      store: PropTypes.object.isRequired,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }).isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };
  static childContextTypes = {
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };



  getChildContext() {
    const context = this.props.context;
    return {
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }


  render() {
    if (this.props.error) {
      return this.props.children;
    }

    const store = this.props.context.store;
    return (
      <Provider store={store}>
        {this.props.children}

      </Provider>
    );
  }

}

export default Wrapper;