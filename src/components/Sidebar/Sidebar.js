/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './Sidebar.scss';
import withStyles from '../../decorators/withStyles';
import Button from 'react-bootstrap/lib/Button';

@withStyles(s)
class Feedback extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    return (
      <aside className={s.root}>
          <h1>Sidebar</h1>
          <Button bsStyle="primary">Primary</Button>
      </aside>
    );
  }

}

export default Feedback;

/*
<a className={s.link} href="https://gitter.im/kriasoft/react-starter-kit">Ask a question</a>
<span className={s.spacer}>|</span>
<a className={s.link} href="https://github.com/kriasoft/react-starter-kit/issues/new">Report an issue</a>
*/
