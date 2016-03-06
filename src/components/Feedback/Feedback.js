/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './Feedback.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class Feedback extends Component {

  render() {
    return (
      <aside className={s.root}>
        <div className={s.container}>
          <h2>Feedback</h2>
          <p>Pupils of ours say:</p>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
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
