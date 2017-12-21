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
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_PROFILE, ACCOUNT_LOGOUT } from '../../../constants';
import history from '../../../core/history';


class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {

  }
  logout() {
    this.props.dispatch(fetchAction({
      type: ACCOUNT_LOGOUT,
    }));
  }
  render() {
    return (
      <nav id="admin-top-navbar" className="navbar navbar-dark bg-inverse navbar-fixed-top" style={{ borderRadius: 0 }}>
        <a className="navbar-brand" href="/">运营管理后台</a>
        <ul hidden={!this.props.profile.display_name} className="nav navbar-nav pull-sm-right">
          <li className="nav-item "><span className="nav-link">欢迎: {this.props.profile.display_name}</span></li>
          <li className="nav-item "><a className="nav-link text-info" href="javascript:;" onClick={this.logout}>退出</a></li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => {
  const { omg } = state;
  const profile = omg[ACCOUNT_PROFILE] || {};
  return {
    profile,
  };
})(withStyles(s)(Header));
