import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { isAuthenticated } from './auth';

import Main from './pages/App/Main';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [allowed, setAllowed] = useState(false);
  const [finished, setFinished] = useState(false);

  const authorize = async () => {
    try {
      const response = await isAuthenticated();
      setAllowed(response);
      setFinished(true);
    } catch (e) {
      setAllowed(false);
      setFinished(true);
    }
  };

  useEffect(() => {
    if (!finished) {
      authorize();
    }
  }, [finished]);

  return allowed && finished ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    finished && <Redirect to="/login" />
  );
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/" exact component={Main}></PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
