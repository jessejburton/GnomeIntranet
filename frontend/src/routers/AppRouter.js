import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import Login from '../components/auth/Login';
import FourOhFour from '../components/FourOhFour';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Register from '../components/auth/Register';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/" component={Dashboard} exact={true} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);

export default AppRouter;
