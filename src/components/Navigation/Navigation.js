/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './Navigation.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(s)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <nav className={cx(s.root, this.props.className)} role="navigation">
        <a className={s.link} href="/about" onClick={Link.handleClick}>About</a>
        <a className={s.link} href="/courses" onClick={Link.handleClick}>Courses</a>
        <a className={s.link} href="/contact" onClick={Link.handleClick}>Contact</a>
        <a className={s.link} href="/login" onClick={Link.handleClick}>Log in</a>
        <a className={cx(s.link, s.highlight)} href="/register" onClick={Link.handleClick}>Sign up</a>
      </nav>
    );
  }

}

export default Navigation;
