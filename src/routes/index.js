import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Messages from '../pages/Messages';
import Stocks from '../pages/Stock';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Auth} exact />
      <Route path="/signup" component={Auth} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
      <Route path="/stock" component={Stocks} isPrivate />
    </Switch>
  );
}
