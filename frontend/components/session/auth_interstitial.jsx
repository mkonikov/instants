import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';
import { Route } from 'react-router-dom';


const AuthInterstitial = () => (
  <div>Hello from Auth!
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />

  </div>


);

export default AuthInterstitial;
