/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-inverse" style={{ borderRadius: 0 }}>
      <a className="navbar-brand" href="/">运营管理后台</a>
      <ul className="nav navbar-nav pull-sm-right">
        <li className="nav-item "><span className="nav-link">欢迎: neil</span></li>
        <li className="nav-item "><a className="nav-link text-info" href="http://admin-omg.wanglibao.com/logout">退出</a></li>
      </ul>
    </nav>  
  );
}

export default withStyles(s)(Header);
