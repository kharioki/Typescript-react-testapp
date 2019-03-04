import * as React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import Page from './components/Page';
import Hello from './containers/Hello';
import Login from './components/Login';

class AppRouter extends React.Component {
  public render() {
    return (
      <Router>
        <Page>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/about" component={Hello} />
            <Route path="/login" component={Login} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default AppRouter;
