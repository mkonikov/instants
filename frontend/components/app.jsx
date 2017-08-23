import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <AuthRoute path="/login" component={AuthInterstitial} />
    <AuthRoute path="/signup" component={AuthInterstitial} />
  </div>


);

export default App;
