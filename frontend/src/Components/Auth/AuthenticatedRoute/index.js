import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import AuthService from '../../../Services/AuthService';

function AuthenticatedRoute(props) {
  if (AuthService.isUserLoggedIn()) {
    return <Route {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default AuthenticatedRoute;