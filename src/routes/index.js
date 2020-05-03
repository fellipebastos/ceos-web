import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Auth} exact />
      <Route path="/signup" component={Auth} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/messages" component={Dashboard} />
      <Route path="/stock" component={Dashboard} />
    </Switch>
  );
}
