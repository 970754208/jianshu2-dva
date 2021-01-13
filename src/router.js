import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Header from './components/header/index.jsx'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
