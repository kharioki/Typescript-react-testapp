import * as React from 'react';

import Form from './styles/Form';

class Login extends React.Component {
  render() {
    return (
      <Form>
        <h2>Login</h2>
        <fieldset>
          <label>
            Email Address
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email here"
              required
            />
          </label>
          <label>
            Password
            <input type="password" id="password" name="password" required />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default Login;
