/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';

import { Provider } from 'react-redux';

import Header from '../Header';
import Container from '../Container';
import Modal from '../Modal';
import Main from '../Main';
import Login from '../Login';
import StatusBar from '../StatusBar';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_PROFILE } from '../../../constants';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      store: PropTypes.object.isRequired,
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }).isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss, store } = this.props.context;
    this.removeCss = insertCss(s);
    // 尝试获取用户信息,用来判断登录
    store.dispatch(fetchAction({
      type: ACCOUNT_PROFILE,
    }));
  }
  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    if (this.props.error) {
      return this.props.children;
    }

    const store = this.props.context.store;
    return (
      <Provider store={store}>
        <div>
          <Login />
          <Main>
            <Header />
            <Container>
              {this.props.children}
            </Container>
            <Modal />
          </Main>
          <StatusBar />
        </div>
      </Provider>
    );
  }

}

export default App;
