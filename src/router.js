import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Header from './components/header'
import Home from './routes/home';
import Detail from './routes/detail/detailLoadable';
import Login from './routes/login/loginLoadable';
import Write from './routes/write/writeLoadable';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:page" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/write" component={Write} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
