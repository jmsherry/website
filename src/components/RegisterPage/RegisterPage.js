/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './RegisterPage.scss';
import withStyles from '../../decorators/withStyles';
import TextBox from '../TextBox/TextBox';

const title = 'New User Registration';

@withStyles(s)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <form className={s.signupForm}>
            <h1>{title}</h1>
            <TextBox type="text" id="first_name" hasLabel="true" labelText="First Name" placeholder="First Name" />
            <TextBox type="text" id="last_name" hasLabel="true" labelText="Last Name" placeholder="Last Name" />
              <TextBox type="email" id="email" hasLabel="true" labelText="Email" placeholder="Email" />

              <TextBox type="password" id="password" hasLabel="true" labelText="First Name" placeholder="Password" />
              <TextBox type="password" id="password_confirm" hasLabel="true" labelText="Confirm Password" placeholder="Confirm Password" />

              <button type="submit" className={s.signupSubmitButton}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }

}

export default RegisterPage;


/*
<label htmlFor="first-name">First Name</label>
<input type="text" placeholder="First name"></input>
  <label htmlFor="last-name">First Name</label>
  <input type="text" placeholder="Last name"></input>
  <label htmlFor="password">Password</label>
  <input type="password"></input>
  <label htmlFor="password">Repeat Password</label>
  <input type="password"></input>
  */
