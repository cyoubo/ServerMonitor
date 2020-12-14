import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import AppPage from './routes/AppPage/AppPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={AppPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
