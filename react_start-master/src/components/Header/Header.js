/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';
import Svg from 'svg-react';
import logo from './logo.png'


class Header extends React.Component {
  
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <Link to={'/'} className={s.outer}>
                <img  className={s.logo} src={logo}/>
                <h1 className={s.mainTitle}>Майстерня</h1>
            </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
